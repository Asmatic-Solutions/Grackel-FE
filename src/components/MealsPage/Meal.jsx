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
                {open?<div className='openInfo'>
                    <div className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reiciendis sunt, sint blanditiis corporis illum consectetur vel nulla iusto non, ex adipisci expedita ducimus molestias.
                    </div>
                    <p className="fulldate">{date.toDateString()}</p>
                </div>:null}
            </div>
            {open?<div className="ingredients">
                {meal.manual_ingredients.map(ingredient=>
                <div key={ingredient.name} className="ingredient">
                    <p>{ingredient.name}</p>
                    <p>{ingredient.category}</p>
                    <p>{ingredient.notes}g</p>
                    <p>{ingredient.calories}Kcals</p>
                </div>)}
            </div>:null    
            }
        </div>
    );
}
export default Meal