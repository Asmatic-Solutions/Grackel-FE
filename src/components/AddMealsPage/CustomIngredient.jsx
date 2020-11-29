import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
function CustomIngredient({ingredient, index, updateIngredient, removeIngredient}){

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
        e.preventDefault();
        toggleEdit();
        updateIngredient(index,edited);
    }

    const handleCancel = () => {
        toggleEdit();
        setEdited(ingredient);
    }

    return(
        <div className="ingredient">
            <div className="info">
                {editing?<input type="text" autoComplete="off" name="name" placeholder={ingredient.name} onChange={handleChange} onSubmit={handleSubmit}/>:<h3>{ingredient.name}</h3>}
                {editing?<input type="text" autoComplete="off" name="category" placeholder={ingredient.category}/>:<p>{ingredient.category}</p>}
                {editing?<input type="number" autoComplete="off" name="calories" placeholder={ingredient.calories}/>:<p>{ingredient.calories}</p>}
                {editing?<input type="textarea" name="notes" autoComplete="off" placeholder={ingredient.notes}/>:<p>{ingredient.notes}</p>}
            </div>
            <div className="controls">
                {editing?<button onClick={handleSubmit}>Save</button>:<span onClick={toggleEdit}><EditIcon/></span>}
                {editing?<button onClick={handleCancel}>Cancel</button>:<span onClick={(e)=>{removeIngredient(e,ingredient)}}><DeleteIcon/></span>}
                
            </div>
        </div>
    )
}

export default CustomIngredient;