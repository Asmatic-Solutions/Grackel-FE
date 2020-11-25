import React,{ useState } from "react";


function AddMealManuallyForm({handleChange,meal,addIngredient,removeIngredient,updateIngredient}){
    const [ingredient,setIngredient]  = useState({
        name:"",
        category:"",
        calories:"",
        notes:""
    });

    const handleNewIngredient = (e) => {
        e.preventDefault();
        addIngredient(ingredient);
        setIngredient({name:"",category:"",calories:"",notes:""});
    }

    const handleIngredient = (e)=>{
        setIngredient({...ingredient, [e.target.name]:e.target.value})
    }

    return(
        <form className="Add-meal-manually-form form-wrapper">
            <fieldset className="add-ingredient" onSubmit={handleNewIngredient}>
                <label htmlFor="Name">Name</label>
                <input type="text" value={ingredient.name} name="name" onChange={handleIngredient}/>
                <label htmlFor="Category">Category</label>
                <input type="text" value={ingredient.category} name="category" onChange={handleIngredient}/>
                <label htmlFor="Calories">Calories</label>
                <input type="text" value={ingredient.calories} name="calories" onChange={handleIngredient}/>
                <label htmlFor="Notes">Notes</label>
                <input type="text" value={ingredient.notes} name="notes" onChange={handleIngredient}/>
                <button name="addProduct" onClick={handleNewIngredient}>Add ingredient</button>
            </fieldset>
        </form>
    )
}

export default AddMealManuallyForm;

