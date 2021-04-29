import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './SignupPage.css'

function SignupPage() {
    const [registerSuccess, toggleRegisterSuccess] = useState(false);
    const {register, handleSubmit, formState: {errors}, useFormContext} = useForm();
    const history = useHistory();
    const methods = useFormContext;

    async function onSubmit(data) {
        try {
            const response = await axios.post('https://polar-lake-14365.herokuapp.com/api/auth/signup', {
                username: data.username,
                email: data.email,
                password: data.password,
                role: ['user']
            });
            console.log(data);
            console.log(response);
            response && toggleRegisterSuccess(true);
            setTimeout(() => {
                history.push('/')
            }, 3000);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <form className='signup-form' onSubmit={handleSubmit(onSubmit)}>
                <div id='signup-title'><h1>Sign up</h1></div>
                <label htmlFor='email'>
                    Email:
                    <input id='email' type='text' name='email' {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    })}/>
                    {errors.email && <p id='error'>This field is required. Use a valid email address.</p>}
                </label>
                <label htmlFor='username'>
                    Username:
                    <input id='username' type='text' name='username' {...register('username', {
                        required: true
                    })}/>
                    {errors.username && <p id='error'>This field is required.</p>}
                </label>
                <label htmlFor='password'>
                    Password:
                    <input id='password' type='password' name='password' {...register('password', {
                        required: true
                    })}/>
                    {errors.password && <p id='error'>This field is required.</p>}
                </label>
                <button>Sign up</button>
                {registerSuccess === true &&
                <p id='signin-message'>You've been registered successfully! You're now being redirected to the Loginpage.</p>}
            </form>
        </>
    )
}

export default SignupPage;