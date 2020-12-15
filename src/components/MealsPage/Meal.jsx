import React, { useState } from 'react';
import './MealsPage.scss'


function Meal({meal}) {
    
    const[open,setOpen] = useState(false);
    const date = new Date(meal.date);

    return (
        <div className={`meal ${open?'open':''}`} onClick={()=>setOpen(!open)}>
            <div className="info">
                <h1>{meal.type} - {date.toDateString().slice(4,10)}</h1>
                <h3>Total<br/><span>1212</span></h3>
            </div>
            
            {open?<div className="ingredients">
                {meal.manual_ingredients.map(ingredient=>
                <div key={ingredient.name}>
                    {ingredient.name}
                    {ingredient.note}
                    {ingredient.calories}
                    {ingredient.category}
                </div>)}
            </div>:null    
            }
        </div>
    );
}
export default Meal