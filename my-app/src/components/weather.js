import React from 'react'
import styled from 'styled-components';


export default ({ city, temperatur, description, error }) => {

    const P = styled.p`
         font-size: 2em;
         font-family: 'Chelsea Market', cursive;
         text-transform: capitalize;
    `;

    let food;
    if (temperatur) {
        if (temperatur > 15) {
            food = <P>It is PicNic weather! Hurray! Pack your sandwiches!</P>
        }
        else {
            food = <P>No, sadly it is not PicNic weather right now, consider eating some soup at home</P>
        }
    }

    return (
        <div>
            {city && <P>{city}</P>}
            {temperatur && <P>{temperatur} °C</P>}
            {description && <P>{description}</P>}
            {food}
            {error && <P>{error}</P>}
        </div>


    )


}


