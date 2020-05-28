import React from 'react'
import styled from 'styled-components';


export default (props) => {

    const Input = styled.input`
        padding:10px;
        padding-left:60px;
        border: 4px solid #37CACE;
        border-radius: 12px;
        width: 45%;
    `;
    const Button = styled.button`
        font-size: 1em;
        margin: 2em;
        padding: 0.5em 2em;
        border: 4px solid #37CACE;
        border-radius: 12px;
    `;

    return (
        <form onSubmit={props.getWeather}>
            <Input
            type='text'
            name='city'
            placeholder='City'>
            </Input>
            <Button>Search</Button>
        </form>
    )
}