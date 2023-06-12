import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';


    const loginSchema = Yup.object().shape(
        
    )



const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Login Form</h4>
            <Formik
                initialValues={initialCredentials}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                <form>
                    <label htmlFor="email">Email</label>
                    <Field id="email" name="enail" placeholder="example@gmail.com" />

                    <label htmlFor="email">Password</label>
                    <Field
                        id="password"
                        name="password"
                        placeholder="****************"
                        type= 'password'
                    />
                    <button type="submit">Submit</button>

                </form>


            </Formik>
        </div>
    );
}

export default LoginFormik;
