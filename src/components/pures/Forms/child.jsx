import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton(){
        const text = messageRef.current.value
        alert(`The input message ${text}`)
    }

    function pressButtonParams(text){
        alert(`El texto es: ${text}`)
    }
    function cleanInput(){
        let text = messageRef.current
        text.value = ''
    }

    function submitName(e){
        e.preventDefault()
        update(nameRef.current.value)
        nameRef.current.value = ''
    }

    return (
        <div style={{background: 'cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log('Mouse Hover')}>{name}</p>
            <button onClick={() => console.log('Button press')}>Boton1</button>
            <button onClick={() => {pressButton()}}>Button 01</button>
            <button onClick={() => {pressButtonParams('hi')}}>Button 02</button>
            <input 
                placeholder='Insert a Text' 
                onFocus={() => console.log('focus o input/focus')}
                onChange={(e) => console.log('Input Changed:', e.target.value)}
                onCopy={() => console.log('Copied text from Input')}
                ref = {messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>Send Menssage</button>
            <button onClick={() => {cleanInput()}}>Clean Input</button>
            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New Name' />
                    <button type='Submit'>Update Name</button>
                    <h2 style={{fontWeight: 'bold', color: 'grey'}}>update: {name}</h2>
                </form>
            </div>

        </div>
    );
}
export default Child;
