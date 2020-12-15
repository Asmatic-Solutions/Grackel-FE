import {axiosWithAuth} from "../../Utils/axiosWithAuth"

export const FETCH_DAILY_START = "FECTH_DAILY_START"
export const FETCH_DAILY_SUCCESS = "FECTH_DAILY_SUCCESS"
export const FETCH_DAILY_FAILURE = "FECTH_DAILY_FAILURE"
export const ADD_DAILY_START = "ADD_DAILY_START"
export const ADD_DAILY_SUCCESS = "ADD_DAILY_SUCCESS"
export const ADD_DAILY_FAILURE = "ADD_DAILY_FAILURE"

//Add that DAILY
export const addDaily = (count) =>{
    return (dispatch) => {
        dispatch({type:ADD_DAILY_START});
        axiosWithAuth().post("/goal/daily",{count})
        .then(res=>{
            dispatch({type:ADD_DAILY_SUCCESS,payload:res})
        }).catch(err=>{
            console.log(err);
            dispatch({type:ADD_DAILY_FAILURE,payload:err})
        })
    }
}

//Fetch that DAILY
export const getDaily = () =>{
    return (dispatch) => {
        dispatch({type:FETCH_DAILY_START});
        axiosWithAuth().get("/goal/daily")
        .then(res=>{
            dispatch({type:FETCH_DAILY_SUCCESS,payload:res})
        }).catch(err=>{
            console.log(err);
            dispatch({type:FETCH_DAILY_FAILURE,payload:err})
        })
    }
}

//// Delete that DAILY