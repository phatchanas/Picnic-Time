import React from 'react';
import Recipe from './recipe' 


export default (props) => {
   
    return(
        <div>
            {props.recipes.map((recipe, i) => <Recipe key={i} recipe={recipe} />)}
        </div>
    )
}