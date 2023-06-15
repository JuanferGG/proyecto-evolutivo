import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is Required'),
        password: Yup.string()
            .required('Password is required')
    }
)



const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Login Form :V</h4>
            <Formik
                initialValues={initialCredentials}
                //* Yup validation Schema
                validationSchema={loginSchema}

                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    //* We save the data in localStorage
                    localStorage.setItem('credentials', values)
                }}
            >

                {/* We obtain props from Formik */}
                {( { values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur } ) => (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" placeholder="example@gmail.com" />

                            {/* Email Errors */}
                            {
                                errors.email && touched.email && (
                                    <ErrorMessage name="email" component="div" />
                                )
                            }

                            <label htmlFor="email">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="****************"
                                type='password'
                            />
                            {/* Password Errors */}
                            {
                                errors.password && touched.password && (
                                    <ErrorMessage name="password" />
                                )
                            }
                            <button type="submit">Submit</button>
                            { isSubmitting ? (<p>Login your Credentials...</p>) : null }
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
}

export default LoginFormik;
