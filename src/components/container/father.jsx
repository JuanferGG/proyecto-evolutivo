import React, { useState } from 'react';
import Child from '../pures/Forms/child';

const Father = () => {

    const [name, setName] = useState('Lucho');

    function showMessage(text){
        alert(`Menssage recived; ${text}`)
    }

    function updateName(newName){
        setName(newName)
    }

    return (
        <div style={{background: 'tomato', padding: '10px'}}>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
