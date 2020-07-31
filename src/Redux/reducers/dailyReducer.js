import {
    ADD_D,
    GET_D
} from "../actions/dailyActions"

const initialState = {

}

export const dailyReducer = (state=initialState,action)=>{

    switch(action.type){
        case ADD_D:
            return{
                ...state,
            };
    }



}