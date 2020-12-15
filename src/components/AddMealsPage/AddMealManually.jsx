import React,{ useState } from 'react';
import AddMealManuallyForm from './AddMealManuallyForm';
import CustomIngredient from './CustomIngredient';
import "./AddMealManually.scss";
import {addMeal} from "../Redux/actions/mealActions"
import { useDispatch, connect } from "react-redux";
import MealTypeForm from './MealTypeForm';
import AddIcon from "../Icons/AddIcon"

function AddMealManuallyPage() {

    const dispatch = useDispatch();
    const [ingredientInput,setIngredientInput] = useState(false);
    const [meal,setMeal] = useState({
        type:"",
        manual:true
    });
    const [manual_ingredients,setManual_ingredients] = useState([]);

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
        dispatch(addMeal({...meal,manual_ingredients}));
    }

    return (
        <div className="addMealManually-wrapper">

            <h1 className="title">Add meal manually</h1>

            <MealTypeForm handleChange={handleChange}/>
            <button onClick={handleSubmit} disabled={manual_ingredients.length>0?false:true} className='addmeal'>Add meal</button>

            <div className="container">
                <h1>Ingredients</h1>
                <div className="ingredients">
                    {manual_ingredients.map((ingredient,i)=>
                    <CustomIngredient key={i} ingredient={ingredient} index={i} updateIngredient={updateIngredient} removeIngredient={removeIngredient}/> 
                    )}
                    <div className="ingredient add" onClick={(e)=>{setIngredientInput(!ingredientInput)}}><AddIcon/></div>
                </div>

                {ingredientInput?
                <AddMealManuallyForm addIngredient={addIngredient} setIngredientInput={setIngredientInput}></AddMealManuallyForm>
                :null}
            </div>
    

        </div>
    );
}
export default connect(null,{addMeal})(AddMealManuallyPage)