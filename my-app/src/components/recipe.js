import React from 'react'
import styled from 'styled-components';


const Div = styled.div`
   box-shadow: 8px 10px rgb(229, 230, 230);
   width: 35%;
   height: 20%;    
   display:flex;
   flex-direction: column;
   margin:15px;
   border: 10px solid rgb(190, 201, 225); 
   margin:40px;
   padding:5px;
   box-sizing:border-box;

   @media only screen and (max-width: 600px) {
       width:90%;
       margin:0;
       margin-bottom: 1.5em;
   }
`;
const Imgfood = styled.img`
    width: 50%;
    height: 45%;   
    border: 4px solid #585c6e;  
    display: block;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 8px 10px rgb(229, 230, 230);
`;
const Ul = styled.ul`
    margin:3em;
    padding:10px;
`;
const H2 = styled.h2`
font-family: 'Chelsea Market', cursive;
`;

const Button = styled.button`
  font-family: 'Chelsea Market', cursive; 
  background-color: white; 
  border: 4px solid #37CACE;
  color: black;
  margin-top: 20px;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  transition-duration: 1s;

  @media only screen and (max-width: 600px) {
    width:50%;

  }
  
&:hover{
  background-color: #37CACE; 
  color: white; 
  font-size: 18px;
}
  }
  `;

export default (props) => {
    const [isOpen, toggleIsOpen] = React.useState(false);

    const handleButtonClick = (e) => {
        if (isOpen === false) {
            toggleIsOpen(true)
        } else {
            toggleIsOpen(false)
        }
    }

    return (
        <Div>
            <H2>
                {props.recipe.recipe.label}
            </H2>
            <Imgfood src={props.recipe.recipe.image} alt="food" />
            <div>
                <Button onClick={handleButtonClick}>Visa recept</Button>
                {isOpen ? <Ul>
                    {props.recipe.recipe.ingredients.map((item, i) => <li key={i}>{item.text}</li>)}
                </Ul> : <p></p>}
            </div>
        </Div>
    )
}