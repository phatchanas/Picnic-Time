import React from 'react';
import Recipe from './recipe' 
import styled from 'styled-components';

const Div = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-around;
    box-sizing:border-box;
    @media only screen and (max-width: 600px) {
       flex-direction: column;
       align-items: center;
   }
`;

export default (props) => {

    
    return(
        <Div>
            {props.recipes.map((recipe, i) => <Recipe key={i} recipe={recipe} />)}
        </Div>
    )
}