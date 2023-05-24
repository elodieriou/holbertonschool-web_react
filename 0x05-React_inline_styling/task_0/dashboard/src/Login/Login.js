import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <React.Fragment>
            <p className={"login-p"}>Login to access the full dashboard</p>
            <div className={"App-form"}>
                <label htmlFor={"email"}>Email:</label>
                <input type={"email"} id={"email"} name={"email"}></input>
                <label htmlFor={"password"}>Password:</label>
                <input type={"password"} id={"password"} name={"password"}></input>
                <button type={"submit"}>OK</button>
            </div>
        </React.Fragment>
    );
}

export default Login;
