import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from 'react-router-dom';
import axios from "axios";

function SignupPage() {
    const [registerSuccess, toggleRegisterSuccess] = useState(false);
    const {register, handleSubmit} = useForm();
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
                    <input id="email" type="input" name="email" {...register("email")}/>
                </label>
                <label htmlFor="username">
                    Username:
                    <input id="username" type="input" name="username" {...register("username")}/>
                </label>
                <label htmlFor="password">
                    Password:
                    <input id="password" type="input" name="password" {...register("password")}/>
                </label>
                <button>Submit</button>
                {registerSuccess === true && <p>You've been registered successfully! You're now being redirected to the login-page.</p>}
            </form>
        </>
    )
}

export default SignupPage;