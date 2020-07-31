import {axiosWithAuth} from "../../Utils/axiosWithAuth"

export const FETCH_GOAL_START = "FETCH_GOAL_START"
export const FETCH_GOAL_SUCCESS = "FETCH_GOAL_SUCCESS"
export const FETCH_GOAL_FAILURE = "FETCH_GOAL_FAILURE"
export const CREATE_GOAL_START = "CREATE_GOAL_START"
export const CREATE_GOAL_SUCCESS = "CREATE_GOAL_SUCCESS"
export const CREATE_GOAL_FAILURE = "CREATE_GOAL_FAILURE"
export const UPDATE_GOAL_START = "UPDATE_GOAL_START"
export const UPDATE_GOAL_SUCCESS = "UPDATE_GOAL_SUCCESS"
export const UPDATE_GOAL_FAILURE = "UPDATE_GOAL_FAILURE"


//Create new goal
export const createGoal = (goal) =>{
    return (dispatch) => {
        dispatch({type:CREATE_GOAL_START});
        axiosWithAuth().post("/goal")
        .then(res=>{
            dispatch({type:CREATE_GOAL_SUCCESS,payload:res.data})
        }).catch(err=>{
            console.log(err);
            dispatch({type:CREATE_GOAL_FAILURE,payload:err})
        })
    }
}

//Update that goal
export const updateGoal = (goal) =>{
    return (dispatch) => {
        dispatch({type:UPDATE_GOAL_START});
        axiosWithAuth().put("/goal")
        .then(res=>{
            dispatch({type:UPDATE_GOAL_SUCCESS,payload:res.data})
        }).catch(err=>{
            console.log(err);
            dispatch({type:UPDATE_GOAL_FAILURE,payload:err})
        })
    }
}

//Fetch that goal
export const getGoal = (count) =>{
    return (dispatch) => {
        dispatch({type:FETCH_GOAL_START});
        axiosWithAuth().get("/goal")
        .then(res=>{
            dispatch({type:FETCH_GOAL_SUCCESS,payload:res.data})
        }).catch(err=>{
            console.log(err);
            dispatch({type:FETCH_GOAL_FAILURE,payload:err})
        })
    }
}

//// Delete that goal