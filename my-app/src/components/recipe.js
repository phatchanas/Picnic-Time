import React from 'react'
import styled from 'styled-components';



 export default (props) => {
     const Div = styled.div`
        box-shadow: 5px 10px #ffea00;
        width: 40%;
        height: 40%;    
        display:flex;
        flex-direction: column;
        margin:15px;
        border: 4px solid #37CACE; 
        margin:40px;
        padding:5px;
        

     `;



     return(
        <Div>
            <h5>
                {props.recipe.recipe.label}
            </h5>
            <img src={props.recipe.recipe.image}/>
            <ul>
                {props.recipe.recipe.ingredients.map((item, i) => <li key={i}>{item.text}</li>)}
            </ul>
         </Div>
     )
 }