import React from 'react'
import styled from 'styled-components';

export default ({ city, country, temperatur, description, error }) => {
    const Div = styled.div`
    margin-top:8em;
    `;

    const P = styled.p`
         font-size: 2em;
         font-family: 'Chelsea Market', cursive;
         text-transform: capitalize;
         margin-right: 80px;
         margin-left: 80px;
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
        <Div>
            {city && <P>{city}</P>}
            {country && <P>{country}</P>}
            {temperatur && <P>{temperatur} °C</P>}
            {description && <P>{description}</P>}
            {food}
            {error && <P>{error}</P>}
        </Div>
    )
}


