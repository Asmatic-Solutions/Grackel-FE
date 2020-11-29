import {axiosWithAuth} from "../../Utils/axiosWithAuth"

export const FETCH_MEAL_START = "FETCH_MEAL_START"
export const FETCH_MEAL_SUCCESS = "FETCH_MEAL_SUCCESS"
export const FETCH_MEAL_FAILURE = "FETCH_MEAL_FAILURE"

export const CREATE_MEAL_START = "CREATE_MEAL_START"
export const CREATE_MEAL_SUCCESS = "CREATE_MEAL_SUCCESS"
export const CREATE_MEAL_FAILURE = "CREATE_MEAL_FAILURE"


// Add new meal
export const addMeal = (meal) =>{
    return (dispatch) => {
        dispatch({type:CREATE_MEAL_START});
        axiosWithAuth().post("/meals",meal)
        .then(res=>{
            dispatch({type:CREATE_MEAL_SUCCESS,payload:res.data})
        }).catch(err=>{
            console.log(err);
            dispatch({type:CREATE_MEAL_FAILURE,payload:err})
        })
    }
}

// Get meals - defaults to all meals last week
export const getMeal = (time=1,timeperiod="week") =>{
    return (dispatch) => {
        dispatch({type:FETCH_MEAL_START});
        axiosWithAuth()
        .get(`/meals?time=${time}&timeperiod=${timeperiod}}`)
        .then(res=>{
            dispatch({type:FETCH_MEAL_SUCCESS,payload:res.data})
        }).catch(err=>{
            console.log(err);
            dispatch({type:FETCH_MEAL_FAILURE,payload:err})
        })
    }
}

// Get meal on specific date
export const getMealOn = (date=null) =>{
    return (dispatch) => {
        dispatch({type:FETCH_MEAL_START});
        axiosWithAuth().get(`/meals/on?date=${date}`) // Append date key 
        .then(res=>{
            dispatch({type:FETCH_MEAL_SUCCESS,payload:res.data})
        }).catch(err=>{
            console.log(err);
            dispatch({type:FETCH_MEAL_FAILURE,payload:err})
        })
    }
}

