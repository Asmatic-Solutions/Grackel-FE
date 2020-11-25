import React,{ useState } from 'react';
import AddMealManuallyForm from './AddMealManuallyForm';
import CustomIngredient from './CustomIngredient';
import "./AddMealManually.scss";
import {addMeal} from "../Redux/actions/mealsActions"
import { useDispatch, connect, useSelector } from "react-redux";
import MealTypeForm from './MealTypeForm';
import { useEffect } from 'react';

function AddMealManuallyPage() {

    const dispatch = useDispatch();
    const [meal,setMeal] = useState({
        type:"",
        manual:true,
        manual_ingredients:[{
            name: "test",
            category: "Cat",
            calories: "123",
            notes: "Test ingredient"
        }]
    });

    const handleChange = (event) => {
        setMeal({...meal,[event.target.name]:event.target.value});
    }

    const addIngredient = (ingredient) => {
        setMeal({...meal,...meal.manual_ingredients.push(ingredient)})
    }

    const removeIngredient = (index) => {
        setMeal({...meal,...meal.manual_ingredients.splice(index,1)})
    }

    const updateIngredient = (index,updatedIngredient) => {
        setMeal({...meal,...meal.manual_ingredients[index]=updatedIngredient})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addMeal(meal));
        console.log("submiting")
    }

    useEffect(()=>{
        console.log({meal})
    },[meal])

    return (
        <div className="addMealManually-wrapper">
            <div className="content">
                <h1 className="title">Add meal manually</h1>
            </div>
            <MealTypeForm handleChange={handleChange}/>
            <div className="ingredients">
                <h1>Ingredients</h1>
                {meal.manual_ingredients.map((ingredient,i)=>
                <CustomIngredient key={i} ingredient={ingredient} index={i} updateIngredient={updateIngredient}/>
                )}
            </div>
            <AddMealManuallyForm addIngredient={addIngredient}></AddMealManuallyForm>
            <button onClick={handleSubmit}>Add meal</button>
        </div>
    );
}
export default connect(null,{addMeal})(AddMealManuallyPage)