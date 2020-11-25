import React,{ useState } from "react";

function MealTypeForm({handleChange}){
    return(
        <form className="meal-type-form form-wrapper">
            <fieldset className="type">
                <select defaultValue="title" name="type" onChange={(e)=>{handleChange(e)}}>
                    <option value="title" disabled >Meal type</option> 
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="snack">Snack</option>
                </select>
            </fieldset>
            <fieldset className="manual">
                <input type="checkbox" name="manual" checked={true} onChange={handleChange} disabled/>
                <label htmlFor="manual">Manual</label>
            </fieldset>
        </form>
    )
}

export default MealTypeForm;

