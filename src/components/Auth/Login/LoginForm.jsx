import React from "react"
function LoginForm(props){

    return(
        <form className="login-form form-wrapper">
            <label>
                Username 
                <input 
                    value={props.creedentials.username}
                    onChange={props.handleChange}
                    name="username"
                    placeholder="Username"
                    type="text"
                />
            </label>
            <label>
                Password 
                <input 
                    value={props.creedentials.password}
                    onChange={props.handleChange}
                    name="password"
                    placeholder="Password"
                    type="text"
                />
            </label>
            <button onClick={props.handleSubmit} name="login">Login</button>
        </form>
    )
}

export default LoginForm;