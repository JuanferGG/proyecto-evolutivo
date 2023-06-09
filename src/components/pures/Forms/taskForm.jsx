import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { levels } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add, length }) => {
    
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(levels.NORMAL)

    function addTask(e){
        e.preventDefault()
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        nameRef.current.value = ''
        descriptionRef.current.value = ''
        add(newTask)
    }

    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold'
    }

    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold'
    }

    const BlockingStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' placeholder='Title' required autoFocus />
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' placeholder='Description' required />
                <select style={normalStyle} className='form-control form-control-lg' ref={levelRef} defaultValue={levels.NORMAL} id='selectLevel'>
                    <option value={levels.NORMAL}>
                        Normal
                    </option>
                    <option value={levels.URGENT}>
                        Urgent
                    </option>
                    <option value={levels.BLOCKING}>
                        Blocking
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    {length > 0 ? 'Add new Task' : 'Create you First task'}
                </button>
            </div>
        </form>
    );
};


TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
};


export default TaskForm;

