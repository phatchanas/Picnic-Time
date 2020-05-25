import React, {useState} from 'react';
import { v4 as uuidv4 } from "uuid";
import Recipe from './recipe' 


export default (props) => {
    
    return(
        <div>
            {props.recipes.map((recipe, i) => <Recipe key={i} recipe={recipe} />)}
        </div>
    )
}