/**
 * * Componente que va contener un formulario para autenticacion de usuarios
 */

import React, { useState } from 'react';

const LoginForm = () => {

    const initinalCredentials = [{
        user: '',
        password: ''
    }]

    const [credentials, setCredentials] = useState(initinalCredentials);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
