import React, { useState, useEffect } from 'react';
import { levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pures/task';

//* Importamos las hojas  de styles
import '../../styles/task.css';
import TaskForm from '../pures/Forms/taskForm';
// import GreetingStyled from '../pures/greetingStyled';


const TaskListComponent = () => {

    const defaultTask1 = new Task('Example 1', 'Description 1', true, levels.NORMAL)
    const defaultTask2 = new Task('Example 2', 'Description 2', false, levels.URGENT)
    const defaultTask3 = new Task('Example 3', 'Description 3', false, levels.BLOCKING)

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control de Ciclo de vida del componente

    useEffect(() => {
        // console.log('Modificacion de tareas');
        setLoading(false);
        return () => {
            console.log('Tasklist component is going to unMount...');
        };
    }, [tasks]);

    function completeTask(task){
        // console.log(`Complete this Task: `, task)
        const index = tasks.indexOf(task)
        const tempTask = [...tasks]
        tempTask[index].completed = !tempTask[index].completed
        // TODO We update the state of the component and it will update the iteration of the tasks in order to show the task update
        setTasks(tempTask)
    }

    function deleteTask(task){
        // console.log(`Delete this Task: `, task)
        const index = tasks.indexOf(task)
        const tempTask = [...tasks]
        tempTask.splice(index,1)
        setTasks(tempTask)
    }

    function addTask(task){
        // console.log(`Task Create this Task: `, task)
        const tempTask = [...tasks]
        tempTask.push(task)
        setTasks(tempTask)
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Card Header */}
                    <div className='card-header p-3'>
                        <h5 style={{textAlign: 'center'}}>Your Tasks:</h5>
                    </div>
                    {/* Card Body */}
                    <div className='card-body' data-md-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Iterar sobre una lista de tareas */}
                                { tasks.map((task, index) => {
                                    return <TaskComponent key={index} task={task} complete={completeTask} deleteTask={deleteTask}></TaskComponent>
                                }) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <TaskForm add={addTask}></TaskForm>
        </div>
    );
};

export default TaskListComponent;
