import React from "react"
import { useState } from "react"
function AddMealManuallyForm({handleChange,meal,addIngredient,removeIngredient,updateIngredient}){


    const [ingredient,setIngredient]  = useState({
        name:"",
        category:"",
        calories:"",
        notes:""
    });

    const [editing,setEditing] = useState(false);
    const [editIndex,setEditIndex] = useState(null)
    
    const handleEdit = (event,ingredient,i) =>{
        setEditing(!editing)
        setEditIndex(i);
        setIngredient(ingredient);
    }

    const handleNewIngredient = (e) => {
        e.preventDefault();
        if(!editing){
            addIngredient(ingredient)
        }else{
            updateIngredient(editIndex,ingredient);
            setEditing(!editing)
            setEditIndex(null);
        }

        setIngredient({name:"",category:"",calories:"",notes:""})
    }

    const handleIngredient = (e)=>{
        setIngredient({...ingredient, [e.target.name]:e.target.value})
    }

    return(
        <form className="Add-meal-manually-form form-wrapper">
            <fieldset className="type">
                <legend> Type of meal </legend>
                <input type="radio" name="type" value="breakfast" onChange={handleChange}/>
                <label htmlFor="Breakfast">Breakfast</label>
                <input type="radio" name="type" value="lunch" onChange={handleChange}/>
                <label htmlFor="Lunch">Lunch</label>
                <input type="radio" name="type" value="dinner" onChange={handleChange}/>
                <label htmlFor="Dinner">Dinner</label>
                <input type="radio" name="type" value="snack" onChange={handleChange}/>
                <label htmlFor="Snack">Snack</label>
            </fieldset>
            <fieldset className="manual">
                <input type="checkbox" name="manual" checked={true} onChange={handleChange}/>
                <label htmlFor="manual">Manual</label>
            </fieldset>

            <fieldset className="add-ingredient" onSubmit={handleNewIngredient}>
                <div className="ingredients">
                    {meal.manual_Ingredients.map((ingredient,i)=>{
                        return <div className="ingredient" key={ingredient.name}>
                        <p>{ingredient.name}</p>
                        <p>{ingredient.category}</p>
                        <p>{ingredient.calories}</p>
                        <p>{ingredient.notes}</p>
                        <div className="controls">
                            <span onClick={(event) => handleEdit(event,ingredient,i)}>Edit</span>
                            <span onClick={() => { removeIngredient(i)} }>Remove</span>
                            </div>
                    </div>
                    })}
                </div>

                <label htmlFor="Name">Name</label>
                <input type="text" value={ingredient.name} name="name" onChange={handleIngredient}/>
                <label htmlFor="Category">Category</label>
                <input type="text" value={ingredient.category} name="category" onChange={handleIngredient}/>
                <label htmlFor="Calories">Calories</label>
                <input type="text" value={ingredient.calories} name="calories" onChange={handleIngredient}/>
                <label htmlFor="Notes">Notes</label>
                <input type="text" value={ingredient.notes} name="notes" onChange={handleIngredient}/>


                <button name="addProduct" onClick={handleNewIngredient}>{editing?"Edit":"Add product"}</button>

            </fieldset>


            <button name="addMeal">Add meal</button>
        </form>
    )
}

export default AddMealManuallyForm;