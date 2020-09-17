import React, { useState } from "react"
import { Redirect, useHistory, Link } from "react-router-dom"
import {axiosWithAuth} from "../../Utils/axiosWithAuth"
import RegisterForm from "./RegisterForm"

function RegisterPage(){
    const [creedentials,setCreedentials] = useState({username:"",password:"",email:""})
    const history = useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axiosWithAuth().post("auth/register",creedentials).then(res=>{
            console.log(res)
            if(res.status===201)
                axiosWithAuth().post("auth/login",creedentials).then(res=>{
                    localStorage.setItem("token",res.data.token)
                    history.push("/")
                }).catch(err=>{
                    console.log(err)
                })
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
                <h1>Register page</h1>
                <RegisterForm creedentials={creedentials} handleChange={handleChange} handleSubmit={handleSubmit}/>
                Already have an account? <Link to="/login">Click here to log in</Link>
            </div>
    )
}

export default RegisterPage;