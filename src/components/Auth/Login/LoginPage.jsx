import React, { useState } from "react"
import { Redirect, useHistory, Link } from "react-router-dom"
import {axiosWithAuth} from "../../Utils/axiosWithAuth"
import LoginForm from "./LoginForm"

function LoginPage(){
    const [creedentials,setCreedentials] = useState({username:"",password:""})
    const history = useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axiosWithAuth().post("auth/login",creedentials).then(res=>{
            localStorage.setItem("token",res.data.token)
            history.push("/")
        }).catch(err=>{
            console.log(err)
        })
    }
    const handleChange=(f)=>{
        setCreedentials({...creedentials, [f.target.name]:f.target.value})
    }

    return(
        localStorage.getItem("token")
        ?<Redirect to="/"/>
        :<div>
            <h1>Login test</h1>
            <LoginForm creedentials={creedentials} handleChange={handleChange} handleSubmit={handleSubmit}/>
            {/* <p>Click to create a new account here</p> */}
            <Link to="/register">Click to create a new account here</Link>
        </div>
    )
        


        // <div>
        //     <h1>Login test</h1>
        //     {localStorage.getItem("token")
        //     ?<Redirect to="/"/>
        //     :<LoginForm creedentials={creedentials} handleChange={handleChange} handleSubmit={handleSubmit}/>}
        // </div>
    
}

export default LoginPage;