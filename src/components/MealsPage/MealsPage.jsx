import React,{ useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import { getMeal,getMealOn } from "../Redux/actions/mealActions";
import Meal from './Meal'

function MealsPage() {

    const fetchMeals = useSelector(state=>state.mealReducer.meals);
    const dispatch = useDispatch();

    const [meals,setMeals] = useState([]);

    useEffect(()=>{
        dispatch(getMeal());
    },[dispatch])

    useEffect(()=>{
        setMeals(fetchMeals);
    },[fetchMeals])

    return (
        <div className="mealsPage">

            <h1>Last week meals</h1>
            
            <div className="mealsWrapper">
                {meals.map(meal=><Meal meal={meal} key={meal.date}></Meal>)}
            </div>
            
        </div>
    );
}
export default connect(null,{getMeal,getMealOn})(MealsPage)