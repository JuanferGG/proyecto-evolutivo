import React from 'react';
import { useState } from 'react';

// TODO Definiendo styles en constantes

// ? Styles usuario logeado
const loggedStyled = {
    color: 'blue'
}

// ? Styles usuario no logeado
const unloggedStyled = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    //? Generamos un estado para el comenente
    //? y así controlar si el usuario esta logeado o no
    const [logged, setLogged] = useState(false);

    const grettingUser = () => (<p>Hola, {props.name}</p>)
    const pleaseLogin = () => (<p> Please Login</p>)

    return (
        <div style={ logged ? loggedStyled : unloggedStyled }>
            {logged ? grettingUser() : pleaseLogin() }
            
            <button onClick={() => {setLogged(!logged)}}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;
