import {combineReducers } from "redux"
import {dailyReducer} from "./dailyReducer"
import {goalReducer} from "./goalReducer"
import {mealReducer} from "./mealReducer"

export default combineReducers({
    dailyReducer,
    goalReducer,
    mealReducer
})