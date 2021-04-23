import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from 'react-router-dom';
import axios from "axios";

function SignupPage() {
    const [registerSuccess, toggleRegisterSuccess] = useState(false);
    const {register, handleSubmit, formState: { errors }} = useForm();
    const history = useHistory();

    //Let op: het emailadres moet een @ bevatten

    async function onSubmit(data) {
        try {
            const response = await axios.post("https://polar-lake-14365.herokuapp.com/api/auth/signup", {
                username: data.username,
                email : data.email,
                password : data.password,
                role: ["user"]
        });
            console.log(data);
            console.log(response);
            toggleRegisterSuccess(true);
            setTimeout(()=>{history.push("/")}, 3000)
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">
                    Email:
                    <input id="email" type="input" name="email" {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    })}/>
                        {errors.email && <p>This field is required. Please use a valid email address.</p>}
                </label>
                <label htmlFor="username">
                    Username:
                    <input id="username" type="input" name="username" {...register("username", {
                        required: true
                    })}/>
                    {errors.username && <p>This field is required.</p>}
                </label>
                <label htmlFor="password">
                    Password:
                    <input id="password" type="input" name="password" {...register("password", {
                        required: true
                    })}/>
                    {errors.password && <p>This field is required.</p>}
                </label>
                <button>Submit</button>
                {registerSuccess === true && <p>You've been registered successfully! You're now being redirected to the Loginpage.</p>}
            </form>
        </>
    )
}

export default SignupPage;