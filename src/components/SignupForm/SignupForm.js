import React from 'react';
import {ReactComponent as LoadingIcon} from '../../assets/loading.svg';
import './SignupForm.css';

function SignupForm({onSubmitFunction, registerEmail, loading, registerSuccess, errorEmail, registerUsername, errorUsername, registerPassword, errorPassword, errorMessage}) {

    return (
        <form className='signup-form' onSubmit={onSubmitFunction}>
            <main id='signup-title'><h1>Sign up</h1></main>
            <label htmlFor='email'>
                Email:
                <input {...registerEmail} id='email' type='text' name='email'/>
                {errorEmail && <p id='error'>This field is required. Use a valid email address.</p>}
            </label>
            <label htmlFor='username'>
                Username:
                <input {...registerUsername} id='username' type='text' name='username'/>
                {errorUsername && <p id='error'>This field is required.</p>}
            </label>
            <label htmlFor='password'>
                Password:
                <input {...registerPassword} id='password' type='password' name='password'/>
                {errorPassword && <p id='error'>This field is required.</p>}
            </label>
            <button>Sign up</button>
            <section id='notify-section'>
            {loading && <LoadingIcon className='loader'/>}
            {errorMessage !== '' && <p id='signup-error'>{errorMessage}</p>}
            {registerSuccess &&
            <p id='signup-message'>You've been registered successfully! You're now being redirected to the Loginpage.</p>}
            </section>
        </form>
    )
}

export default SignupForm;