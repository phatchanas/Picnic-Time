import React from 'react'
 export default (props) => {
     return(
        <div>
            <h5>
                {props.recipe.recipe.label}
            </h5>
            <img src={props.recipe.recipe.image}/>
            <ul>
                {props.recipe.recipe.ingredients.map((item, i) => <li key={i}>{item.text}</li>)}
            </ul>
         </div>
     )
 }