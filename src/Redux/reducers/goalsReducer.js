import {
    FECTH_GOAL_START,
    FECTH_GOAL_SUCCESS,
    FECTH_GOAL_FAILURE,
    CREATE_GOAL_START,
    CREATE_GOAL_SUCCESS,
    CREATE_GOAL_FAILURE,
    UPDATE_GOAL_START,
    UPDATE_GOAL_SUCCESS,
    UPDATE_GOAL_FAILURE
} from "../actions/goalActions"
import { FECTH_DAILY_FAILURE } from "../actions/dailyActions"

const initialState = {
    message:"",
    Goal:"",
}

export const goalReducer = (state=initialState,action)=>{
    console.log("---",action.type,action.payload)
    switch(action.type){
        case FECTH_GOAL_START:
            return {...state}
        case FECTH_GOAL_SUCCESS:
            return {...state}
        case FECTH_DAILY_FAILURE:
            return {...state}
        case CREATE_GOAL_START:
            return {...state}
        case CREATE_GOAL_SUCCESS:
            return {...state}
        case CREATE_DAILY_FAILURE:
            return {...state}
        case UPDATE_GOAL_START:
            return {...state}
        case UPDATE_GOAL_SUCCESS:
            return {...state}
        case UPDATE_DAILY_FAILURE:
            return {...state}
    }
}