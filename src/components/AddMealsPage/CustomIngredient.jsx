import React from "react"
import { useEffect } from "react";
import { useState } from "react";
function CustomIngredient({ingredient, index, updateIngredient}){

    const [editing,setEditing] = useState(false);
    const [edited,setEdited] = useState({})

    useEffect(()=>{
        setEdited(ingredient);
    },[])

    const toggleEdit = () =>{
        setEditing(!editing);
    }

    const handleChange = (e) =>{
        e.preventDefault();
        setEdited({...edited, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) =>{
        toggleEdit();
        updateIngredient(index,edited);
        console.log(edited,ingredient);
    }

    const handleCancel = () => {
        toggleEdit();
        setEdited(ingredient);
    }

    return(
        <div className="ingredient">
            <div className="info">
                {editing?<input name="name" placeholder={ingredient.name} onChange={handleChange} onSubmit={handleSubmit}/>:<p>{ingredient.name}</p>}
                {editing?<input name="category" placeholder={ingredient.category}/>:<p>{ingredient.category}</p>}
                {editing?<input name="calories" placeholder={ingredient.calories}/>:<p>{ingredient.calories}</p>}
                {editing?<input name="notes" placeholder={ingredient.notes}/>:<p>{ingredient.notes}</p>}
            </div>
            <div className="controls">
                {editing?<button onClick={handleSubmit}>Save</button>:<span onClick={toggleEdit}>Edit</span>}
                {editing?<button onClick={handleCancel}>Cancel</button>:<span>Remove</span>}
                
            </div>
        </div>
    )
}

export default CustomIngredient;