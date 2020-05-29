import React, { useState, useEffect } from 'react'
import styled from 'styled-components';


export default (props) => {
  const [city, setCity] = useState(null);
  const Button = styled.button`
        font-size: 1em;
        margin: 2em;
        padding: 0.5em 2em;
        border: 4px solid #37CACE;
        border-radius: 12px;
    `;

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
      <input
        type='text'
        name='city'
        placeholder='City'
        value={city}
        onChange={handleChange}
      >
      </input>
      <Button>Search</Button>
    </form>
  )
}