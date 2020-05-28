// import React from 'react'
// import styled from 'styled-component';

//  export default (props) => {
//      console.log(props.recipe.recipe)
     
//     //  const H5 = styled.h5`
//     //   background-color: red; 
//     //   `;

//      return(
//         <div>
//             <h5>
//                 {props.recipe.recipe.label}
//             </h5>
//             <img src={props.recipe.recipe.image}/>
//             <ul>
//                 {props.recipe.recipe.ingredients.map(item => <li>{item.text}</li>)}
//             </ul>
//          </div>
//      )
//  }

import React from 'react'
import styled from 'styled-components';
export default (props) => {

     console.log(props.recipe.recipe)
     const H5 = styled.h5`
        font-size: 25px;
        text-shadow: 2px 2px #957DAD;
     `;

     const DIV = styled.div`
       width: 30rem;
        margin: 3rem;
        display: flex;
        flex-direction: column;
        background-color: #FFCCF9;
        padding: 2rem;
        position: relative;
        border-radius: 0.5rem;
        box-shadow: 2rem 3rem 5rem #93e9be;
        // border; 2px soild white; 
                `; 
     return(
        <DIV>
            <H5>
              {props.recipe.recipe.label}
            </H5>
            <img src={props.recipe.recipe.image}/>
            <ul>
                
                {props.recipe.recipe.ingredients.map(item => <li>{item.text}</li>)}
            </ul>
         </DIV>
     )
}
