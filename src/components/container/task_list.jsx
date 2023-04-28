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
    const defaultTask3 = new Task('Example 3', 'Description 2', false, levels.BLOCKING)

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control de Ciclo de vida del componente

    useEffect(() => {
        console.log('Modificacion de tareas');
        setLoading(false);
        return () => {
            console.log('Tasklist component is going to unMount...');
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log('TODO: cambiar estado de una tarea')
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
                                    <th scope='col'>Descrption</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Iterar sobre una lista de tareas */}
                                { tasks.map((task, index) => {
                                    return <TaskComponent key={index} task={task}></TaskComponent>
                                }) }
                            </tbody>
                        </table>
                    </div>
                    <TaskForm></TaskForm>
                </div>
            </div>
        </div>
    );
};

export default TaskListComponent;
