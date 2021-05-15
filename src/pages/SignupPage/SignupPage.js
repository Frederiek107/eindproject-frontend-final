import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './SignupPage.css'
import SignupForm from '../../components/SignupForm/SignupForm';

function SignupPage() {
    const [registerSuccess, toggleRegisterSuccess] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const {register, handleSubmit, formState: {errors}} = useForm();
    const history = useHistory();

    async function onSubmit(data) {
        setErrorMessage('');
        try {
            toggleLoading(true);
            const response = await axios.post('https://polar-lake-14365.herokuapp.com/api/auth/signup', {
                username: data.username,
                email: data.email,
                password: data.password,
                role: ['user']
            });
            response && toggleRegisterSuccess(true);
            response && toggleLoading(false);
            setTimeout(() => {
                history.push('/login')
            }, 2000);
        } catch (e) {
            console.error(e);
            toggleLoading(false);
            setErrorMessage("Sorry, the connection with the database was lost or your data couldn't be registered. Please try to sign up again.")
        }
    }

    return (
            <SignupForm
            onSubmitFunction={handleSubmit(onSubmit)}
            registerEmail={{...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
            })}}
            loading={loading}
            registerSuccess={registerSuccess}
            errorEmail={errors.email}
            registerUsername={{...register('username', {
                    required: true
                })}}
            errorUsername={errors.username}
            registerPassword={{...register('password', {
                    required: true
                })}}
            errorPassword={errors.password}
            errorMessage={errorMessage}
            />
    )
}

export default SignupPage;