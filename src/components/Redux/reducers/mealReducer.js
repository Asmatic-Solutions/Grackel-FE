import {
    FETCH_MEAL_START,
    FETCH_MEAL_SUCCESS,
    FETCH_MEAL_FAILURE,
    CREATE_MEAL_START,
    CREATE_MEAL_SUCCESS,
    CREATE_MEAL_FAILURE
} from "../actions/mealActions"

const initialState = {
    addedMeal:{},
    meals:[]
}

export const mealReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_MEAL_START:
            return{...state};
        case FETCH_MEAL_SUCCESS:
           return{...state,meals:action.payload.data}
        case FETCH_MEAL_FAILURE:
            return{...state,}
        case CREATE_MEAL_START:
            return{...state,};
        case CREATE_MEAL_SUCCESS:
            return{...action.payload.data}
        case CREATE_MEAL_FAILURE:
            return{...state,}
        default:
            return state
    }
}