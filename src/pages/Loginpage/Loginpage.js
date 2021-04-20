import React from 'react';
import './Loginpage.css';
import {useForm} from "react-hook-form";
import CountryMenu from "../../components/CountryMenu/CountryMenu";

function Loginpage() {
    const {register, handleSubmit} = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div id="page">
            <div id="login">
                <h1>Log in</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username" {...register("username")}>
                        Username
                        <input id="username" type="text" name="username"/>
                    </label>
                    <label htmlFor="password" {...register("password")}>
                        Password
                        <input id="password" type="text"  name="password"/>
                    </label>
                    <CountryMenu/>
                    <button id="login-button">Submit</button>
                </form>
            </div>
            <div id="signup">
                No account? Sign up here!
            </div>
        </div>
    )
}

export default Loginpage;