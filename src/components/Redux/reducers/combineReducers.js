import {combineReducers } from "redux"
import {dailyReducer} from "./dailyReducer"
import {goalReducer} from "./goalReducer"

export default combineReducers({
    dailyReducer,
    goalReducer
})