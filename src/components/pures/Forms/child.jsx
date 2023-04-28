import React from 'react';

const Child = ({ name }) => {
    function pressButton(){
        alert('Default Text')
    }

    function pressButtonParams(text){
        alert(`El texto es: ${text}`)
    }

    return (
        <div>
            <p onMouseOver={() => console.log('Mouse Hover')}>Child Component</p>
            <button onClick={() => console.log('Button press')}>Boton1</button>
            <button onClick={() => {pressButton()}}>Button 01</button>
            <button onClick={() => {pressButtonParams('hi')}}>Button 02</button>
            <input 
                placeholder='Insert a Text' 
                onFocus={() => console.log('focus o input/focus')}
                onChange={(e) => console.log('Input Changed:', e.target.value)}
                onCopy={() => console.log('Copied text from Input')}
            />
        </div>
    );
}

export default Child;
