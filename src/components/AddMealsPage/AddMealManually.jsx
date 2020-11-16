import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./AddMealManually.scss";
import AddMealManuallyForm from './AddMealManuallyForm';

function AddMealManuallyPage() {


    const [meal,setMeal] = useState({
        type:"",
        manual:true,
        manual_Ingredients:[{
            name: "test",
            category: "Cat",
            calories: "123",
            notes: "Test ingredient"
        }]
    });

    useEffect(()=>{
        // console.log(meal)
    },[meal])

    const handleChange = (event) => {
        setMeal({...meal,[event.target.name]:event.target.value})
    }

    const addIngredient = (ingredient) => {
        setMeal({...meal,...meal.manual_Ingredients.push(ingredient)})
    }

    const removeIngredient = (index) => {
        setMeal({...meal,...meal.manual_Ingredients.splice(index,1)})
    }

    const updateIngredient = (index,updatedIngredient) => {
        console.log("editing",index)
        console.log("ss",updatedIngredient);
        setMeal({...meal,...meal.manual_Ingredients[index]=updatedIngredient})
        console.log(meal)
    }



    return (
        <div className="addMealManually-wrapper">
            <div className="content">
                <h1 className="title">Add meal manually</h1>
            </div>
            <AddMealManuallyForm 
            meal={meal} 
            handleChange={handleChange} 
            addIngredient={addIngredient} 
            removeIngredient={removeIngredient}
            updateIngredient={updateIngredient}
            ></AddMealManuallyForm>
        </div>
    );



}

export default AddMealManuallyPage;