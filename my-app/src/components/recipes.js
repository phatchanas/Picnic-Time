import React from 'react';
import Recipe from './recipe' 
import styled from 'styled-components';




export default (props) => {
    const Div = styled.div`
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        
    `;

   
    return(
        <Div>
            {props.recipes.map((recipe, i) => <Recipe key={i} recipe={recipe} />)}
        </Div>
    )
}