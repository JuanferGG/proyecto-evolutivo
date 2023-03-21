import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task }  from '../../models/task.class';


const TaskComponent = ( { task } ) => {

    useEffect(() => {
        console.log('Tarea creada')
        return () => {
            console.log(`Task ${ task.name } is going to unMount`)
        };
    },[task]);

    return (
        <div>
            <h2>Nombre: { task.name }</h2>
            <h3>Descripcíon: { task.description }</h3>
            <h4>Level: { task.level }</h4>
            <h5>Esta tarea esta: { task.completed ? 'COMPLETED' : 'PENDING' }</h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
