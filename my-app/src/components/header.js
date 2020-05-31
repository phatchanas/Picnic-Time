import React from 'react'
import styled from 'styled-components';
import Img from './sun.png';




const H1 = styled.h1`
    color:  #585c6e;
    margin:7px;
    padding:18px;
    font-family: 'Chelsea Market', cursive;
    font-size: 5em;
    @media only screen and (max-width: 600px) {
        font-size: 2em;
 
   }
`;
const ImgSun = styled.img`
animation: spin infinite 20s linear;
margin:25px;

@keyframes spin {
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
}
`;    
export default()=>{


    return(
        <div> 
         <ImgSun src={Img} alt="Sun"/> 
        <H1> Is it Picnic weather?</H1>
        </div>
    )

    

    

}