import {
    FETCH_MEAL_START,
    FETCH_MEAL_SUCCESS,
    FETCH_MEAL_FAILURE,
    ADD_MEAL_START,
    ADD_MEAL_SUCCESS,
    ADD_MEAL_FAILURE
} from "../actions/mealActions"

const initialState = []

export const mealReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_MEAL_START:
            return{...state};
        case FETCH_MEAL_SUCCESS:
           return{...action.payload}
        case FETCH_MEAL_FAILURE:
            return{...state,}
        case ADD_MEAL_START:
            return{...state,};
        case ADD_MEAL_SUCCESS:
            return{...action.payload}
        case ADD_MEAL_FAILURE:
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