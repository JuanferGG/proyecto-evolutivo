/**
 * Ejemplo de tipo clase que dispone de los metodos de ciclo de vida
 */

import PropTypes from "prop-types";
import React, { Component } from "react";

export class lifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentWillMount(){
        console.log('WILLMOUNT: Antes del montje del componente')
    }

    componentDidMount(){
        console.log('DIDMOUNT: Justo antes de renderizar el componente')
    }

    componentWillReceiveProps(nextProps){
        console.log('WillReceiveProps: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState){
        /**
         * * Controlar si el componente debe o no actualizarse
         */
        // return true
    }

    componentWillUpdate(nextProps, nextState){
        console.log('WillUpdate: Justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('DidUpdate: Justo despues de actulizarse')
    }

    componentWillUnmount(){
        console.log('WillUnmount: Justo antes de desaparecer')
    }

    render() {
        return <div>lifeCycleExample</div>;
    }
}

export default lifeCycleExample;
