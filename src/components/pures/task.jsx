import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task }  from '../../models/task.class';
import { levels } from '../../models/levels.enum';

// * Importamos la Hoja de estilos
import '../../styles/task.css'

const TaskComponent = ( { task } ) => {

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
     * Function that return icon depending on completion of the task
     */
    function taskCompletedIcon(){
        if(task.completed){
            return (<i className='bi-toggle-on' style={{color: 'green'}}></i>) 
        } else {
            return (<i className='bi-toggle-off' style={{color: 'grey'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ task.name }</span>
            </th>
            <td className='aling-middel'>
                <span>{ task.description }</span>
            </td>
            <td className='aling-middel'>
                {/* TODO Execution of Function to return badge element */}
                {taskLevelBadge()}
            </td>
            <td className='aling-middel'>
                {/* TODO Execution of Function to return icon depending on completion */}
                {taskCompletedIcon()}
                <i className='bi bi-trash' style={ {color: 'tomato', fontWeight: 'bold'} }></i>
            </td>
        </tr>
        // {/* <div>
        //     <h2 className='task-name'>Nombre: { task.name }</h2>
        //     <h3>Descripcíon: { task.description }</h3>
        //     <h4>Level: { task.level }</h4>
        //     <h5>Esta tarea esta: { task.completed ? 'COMPLETED' : 'PENDING' }</h5>
        // </div> */}
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
