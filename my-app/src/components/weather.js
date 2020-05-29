import React from 'react'
import styled from 'styled-components';


export default ({city, temperatur, description, error}) => {
   

    const P = styled.p`
         font-size: 2em;
         font-family: 'Chelsea Market', cursive;
    `;
    


    return (
        <div>
            {city && <P>{city}</P>}
            {temperatur && <P>{temperatur} °C</P>}
            {description && <P>{description}</P>}
            {error && <P>{error}</P>}
        </div>
    )
}
