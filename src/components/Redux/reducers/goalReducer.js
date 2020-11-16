import {
    FETCH_GOAL_START,
    FETCH_GOAL_SUCCESS,
    FETCH_GOAL_FAILURE,
    CREATE_GOAL_START,
    CREATE_GOAL_SUCCESS,
    CREATE_GOAL_FAILURE,
    UPDATE_GOAL_START,
    UPDATE_GOAL_SUCCESS,
    UPDATE_GOAL_FAILURE
} from "../actions/goalActions"


const initialState = {
    message:"",
    goal:"",
}

export const goalReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_GOAL_START:
            return {...state}
        case FETCH_GOAL_SUCCESS:
            return {...state, goal:action.payload.goal}
        case FETCH_GOAL_FAILURE:
            return {...state}
        case CREATE_GOAL_START:
            return {...state}
        case CREATE_GOAL_SUCCESS:
            return {...state}
        case CREATE_GOAL_FAILURE:
            return {...state}
        case UPDATE_GOAL_START:
            return {...state}
        case UPDATE_GOAL_SUCCESS:
            return {...state}
        case UPDATE_GOAL_FAILURE:
            return {...state}
        default:
            return state
    }
}