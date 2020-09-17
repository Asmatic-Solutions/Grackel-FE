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
            <label>
                Email 
                <input 
                    value={props.creedentials.email}
                    onChange={props.handleChange}
                    name="email"
                    placeholder="example@example.com"
                    type="email"
                />
            </label>

            <button onClick={props.handleSubmit} name="Sign up">Sign up</button>
        </form>
    )
}

export default LoginForm;