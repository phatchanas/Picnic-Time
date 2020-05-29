import React from 'react'
import styled from 'styled-components';
import Img from './sun.png';




export default()=>{
    const H1 = styled.h1`
        color:   #585c6e;
        border-bottom: 4px solid black;
        margin:5px;
        padding:15px;
        font-family: 'Chelsea Market', cursive;
        font-size: 5em;
    `;
    const ImgSun = styled.img`
    animation: spin infinite 20s linear;

    @keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
    `;    


    return(
        <div> 
         <ImgSun src={Img} alt="Sun"/> 
        <H1> Is it Picnic weather?</H1>
        </div>
    )

    

    

}