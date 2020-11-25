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
        manual:true
    });
    const [manual_ingredients,setManual_ingredients] = useState([{
        calories: "wec",
        category: "ecw",
        name: "cewvfvfvfvfvsdvgfnrtnednyternwec",
        notes: "wec"
    }]);

    const handleChange = (event) => {
        setMeal({...meal,[event.target.name]:event.target.value});
    }

    const addIngredient = (ingredient) => {
        setManual_ingredients([...manual_ingredients,ingredient]);
    }

    const removeIngredient = (event,ingredient) => {
        event.preventDefault();
        setManual_ingredients([...manual_ingredients.filter(_ingredient=>{return _ingredient !== ingredient})]);
    }

    const updateIngredient = (index,updatedIngredient) => {
        let ingreds = [...manual_ingredients]; // create copy of custom ingredients
        ingreds[index] = {...updatedIngredient}; // Change the updated ingredient
        setManual_ingredients(ingreds); // Set state for new ingredient
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        // dispatch(addMeal({meal,manual_ingredients}));
        console.log("submiting",{meal,manual_ingredients})
    }

    useEffect(()=>{
        console.log({meal,manual_ingredients})
    },[meal,manual_ingredients])

    return (
        <div className="addMealManually-wrapper">
            <div className="content">
                <h1 className="title">Add meal manually</h1>
            </div>
            <MealTypeForm handleChange={handleChange}/>
            <div className="ingredients">
                <h1>Ingredients</h1>
                {manual_ingredients.map((ingredient,i)=>
                <CustomIngredient key={i} ingredient={ingredient} index={i} updateIngredient={updateIngredient} removeIngredient={removeIngredient}/> 
                )}
            </div>
            <AddMealManuallyForm addIngredient={addIngredient}></AddMealManuallyForm>
            <button onClick={handleSubmit}>Add meal</button>
        </div>
    );
}
export default connect(null,{addMeal})(AddMealManuallyPage)