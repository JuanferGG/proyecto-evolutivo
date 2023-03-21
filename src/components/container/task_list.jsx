import React, { useState, useEffect } from 'react';
import { levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pures/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default Description', false, levels.NORMAL)

    // Estado del componente
    const [tasks, setTasks] = useState(defaultTask);
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
            <div>
                Your Task :
            </div>
            {/* TODO: Aplicar un for/map para renderizar una lista de tareas */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
