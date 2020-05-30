import React, { useState} from 'react'
import styled from 'styled-components';

const Input = styled.input`
  font-family: 'Chelsea Market', cursive;
  font-size: 5em;
  width: 25%;
  border: 0;
  border-bottom: 4px solid  #585c6e;
  outline: 0;
  font-size: 1.3rem;
  margin: 2em;
  padding: 10px ;
  background: transparent;
  transition: border-color 0.5s linear, width 0.5s ease-in;

  &:focus{
    border-bottom: 4px solid #37CACE;
    width: 30%;

  }
`;


const Button = styled.button`
  font-family: 'Chelsea Market', cursive; 
  background-color: white; 
  border: 4px solid #585c6e;
  color: black;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  transition-duration: 1s;


&:hover{
  background-color:#585c6e; 
  color: white; 
  font-size: 18px;
}
}
  `;
export default (props) => {
  const [city, setCity] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setCity(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (city) {
      props.setQuery(city);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        type='text'
        name='city'
        placeholder='City'
        value={city}
        onChange={handleChange}
      >
      </Input>
      <Button>Search</Button>
    </form>
  )
}