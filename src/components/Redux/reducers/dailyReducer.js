import {
    FETCH_DAILY_START,
    FETCH_DAILY_SUCCESS,
    FETCH_DAILY_FAILURE,
    ADD_DAILY_START,
    ADD_DAILY_SUCCESS,
    ADD_DAILY_FAILURE
} from "../actions/dailyActions"

const initialState = {
    User_ID:"",
    Date:"",
    DailyCount:"",
    Success:true,
}

export const dailyReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_DAILY_START:
            return{...state,};
        case FETCH_DAILY_SUCCESS:
           return{...action.payload}
        case FETCH_DAILY_FAILURE:
            checkToken(action.payload.response.status)
            return{...state,}
        case ADD_DAILY_START:
            return{...state,};
        case ADD_DAILY_SUCCESS:
            return{...action.payload}
        case ADD_DAILY_FAILURE:

            checkToken(action.payload.response.status)
            console.log("--",{state,action})
            return{...state,}
        default:
            return state
    }
}

function checkToken(statusCode){
    // Check if error code is 401
    if(statusCode === 401){
        window.localStorage.removeItem("token")
        window.history.go("/login")
    }
}