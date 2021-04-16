import React from 'react';
import './Loginpage.css';

function Loginpage() {

    return (
        <div id="page">
            <div id="login">
                <h1>Log in</h1>
                <form>
                    <label htmlFor="username">
                        Username
                        <input id="username" type="text" name="username"/>
                    </label>
                    <label htmlFor="password">
                        Password
                        <input id="password" type="text"  name="password"/>
                    </label>
                    <div id="retrieve-password">
                        Forgot password?
                    </div>
                </form>
            </div>

            <button id="login-button">Log in</button>

            <div id="signup">
                No account? Sign up here!
            </div>
        </div>
    )
}

export default Loginpage;