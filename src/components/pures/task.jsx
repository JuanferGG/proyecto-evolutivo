import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//? Models
import { Task }  from '../../models/task.class';
import { levels } from '../../models/levels.enum';

// * Importamos la Hoja de estilos
import '../../styles/task.css'

const TaskComponent = ( { task, complete, deleteTask } ) => {

    useEffect(() => {
        console.log('Tarea creada')
        return () => {
            console.log(`Task ${ task.name } is going to unMount`)
        };
    },[task]);

    /**
     * Function that return a Badge
     * depending on the level of the task
     */
    function taskLevelBadge(){
        switch (task.level) {
            case levels.NORMAL:
                return(<h6 className='mb-0'>
                    <span className='badge bg-primary'>{task.level}</span>
                </h6>)
            case levels.URGENT:
                return(<h6 className='mb-0'>
                    <span className='badge bg-warning'>{task.level}</span>
                </h6>)
            case levels.BLOCKING:
                return(<h6 className='mb-0'>
                    <span className='badge bg-danger'>{task.level}</span>
                </h6>)    
            default:
                break;
        }
    }

    /**
     ** Function that return icon depending on completion of the task
     */
    function taskCompletedIcon(){
        if(task.completed){
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>) 
        } else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }

    const taskCompleted = {
        backGroundColor: 'tomato',
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through wavy red'
    }
    const taskPending = {
        color: 'black',
        fontWeight: 'bold',
    }



    return (
        <tr style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{ task.name }</span>
            </th>
            <td className='align-middel'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middel'>
                {/* TODO Execution of Function to return badge element */}
                {taskLevelBadge()}
            </td>
            <td className='align-middel'>
                {/* TODO Execution of Function to return icon depending on completion */}
                {taskCompletedIcon()}
                <i onClick={() => deleteTask(task)} className='bi bi-trash task-action' style={ {color: 'tomato', fontWeight: 'bold'} }></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
};


export default TaskComponent;
