import React from 'react'
 export default (props) => {
     console.log(props.recipe.recipe)
     return(
        <div>
            <h5>
                {props.recipe.recipe.label}
            </h5>
            <img src={props.recipe.recipe.image}/>
            <ul>
                {props.recipe.recipe.ingredients.map(item => <li>{item.text}</li>)}
            </ul>
         </div>
     )
 }