import React from 'react';
import {useForm} from 'react-hook-form';

function SignupForm({onSubmitFunction, condition}) {
    const {register, formState: {errors}} = useForm();

    return (
        <form className='signup-form' onSubmit={onSubmitFunction}>
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
            <button>Submit</button>
            {condition === true &&
            <p>You've been registered successfully! You're now being redirected to the Loginpage.</p>}
        </form>
    )
}

export default SignupForm;