import axios from "axios"

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem("token")

    return axios.create({
        baseURL:"https://grackel-testing.herokuapp.com/",
        headers:{
            authorization:token
        }
    })



}