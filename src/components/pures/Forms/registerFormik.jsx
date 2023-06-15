import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//* Models
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';


const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'User name too short')
                .max(12, 'User name too Long')
                .required('User name is required'),
            email: Yup.string()
                .email('Email invalid Ej xxxxx@thing.xxx')
                .required('Email is required'),
            rol: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must Select a role: user / admin')
                .required('Role is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        'Password must Match!'
                    ).required('You Must Confitm the password')
                })
        }
    )

    const submit = () => {
        alert('Register User')
    }

    return (
        <div>
            <h4>Register Form Formik</h4>
            <Formik
                initialValues={initialValues}
                // * Yup validation Schema
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="username">User Name</label>
                            <Field id="username" type='text' name="username" placeholder="Your User Name" />

                            {/* Username Errors */}
                            {
                                errors.username && touched.username && (
                                    <ErrorMessage name="username" component="div" />
                                )
                            }

                            <label htmlFor="email">User Name</label>
                            <Field id="email" type='email' name="email" placeholder="example@gmail.com" />

                            {/* Email Errors */}
                            {
                                errors.email && touched.email && (
                                    <ErrorMessage name="email" component="div" />
                                )
                            }
                            
                            <label htmlFor="role">User role</label>

                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="****************"
                                type='password'
                            />
                            {/* Password Errors */}
                            {
                                errors.password && touched.password && (
                                    <ErrorMessage name="password" component="div" />
                                )
                            }

                            <label htmlFor="confirm">confirm</label>
                            <Field
                                id="confirm"
                                name="confirm"
                                placeholder= "Confirm Password"
                                type='password'
                            />
                            {/* Confirm Password Errors */}
                            {
                                errors.confirm && touched.confirm && (
                                    <ErrorMessage name="confirm" component="div"/>
                                )
                            }

                            <button type="submit">Register Acount</button>
                            { isSubmitting ? (<p>Sending your Credentials...</p>) : null }
                            
                        </Form>
                    )}

            </Formik>
        </div>
    );
}

export default RegisterFormik;
