import {
    FECTH_DAILY_START,
    FECTH_DAILY_SUCCESS,
    FECTH_DAILY_FAILURE,
    ADD_DAILY_START,
    ADD_DAILY_SUCCESS,
    ADD_DAILY_FAILURE
} from "../actions/dailyActions"
import { act } from "react-dom/test-utils";

const initialState = {
    User_ID:"",
    Date:"",
    DailyCount:"",
    Success:true,
}

export const dailyReducer = (state=initialState,action)=>{
    console.log("---",action.type,action.payload)
    switch(action.type){
        case FECTH_DAILY_START:
            return{...state,};
        case FECTH_DAILY_SUCCESS:
           return{...state}
        case FECTH_DAILY_FAILURE:
            return{...state,}
        case ADD_DAILY_START:
            return{...state,};
        case ADD_DAILY_SUCCESS:
            return{...state}
        case ADD_DAILY_FAILURE:
            return{...state,}
    }
}