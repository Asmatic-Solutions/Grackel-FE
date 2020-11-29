import React,{ useState } from "react";


function AddMealManuallyForm({addIngredient, setIngredientInput}){
    const [ingredient,setIngredient]  = useState({
        name:"",
        category:"",
        calories:"",
        notes:""
    });

    const handleNewIngredient = (e) => {
        e.preventDefault();
        if(ingredient.name!=""){
            addIngredient(ingredient);
            setIngredient({name:"",category:"",calories:"",notes:""});
            setIngredientInput(false)
        } 
    }

    const handleIngredient = (e)=>{
        setIngredient({...ingredient, [e.target.name]:e.target.value})
    }

    return(
        <form className="add-meal-form form-wrapper">
            <button type="button" className="exitIcon" onClick={()=>{setIngredientInput(false)}}>X</button>
            <fieldset className="add-ingredient" onSubmit={handleNewIngredient}>
                <label htmlFor="Name">Name</label>
                <input type="text" value={ingredient.name} name="name" onChange={handleIngredient} required autoComplete="off"/>
                <label htmlFor="Category">Category</label>
                <input type="text" value={ingredient.category} name="category" onChange={handleIngredient} autoComplete="off"/>
                <label htmlFor="Calories">Calories</label>
                <input type="number" value={ingredient.calories} name="calories" onChange={handleIngredient} autoComplete="off"/>
                <label htmlFor="Notes">Notes</label>
                <input type="text" value={ingredient.notes} name="notes" onChange={handleIngredient} autoComplete="off"/>
                <button type="submit" name="addProduct" className="addProduct" onClick={handleNewIngredient}>Add ingredient</button>
            </fieldset>
        </form>
    )
}

export default AddMealManuallyForm;

