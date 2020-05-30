import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import styled from 'styled-components';

const H1 = styled.h1`  
    font-size: 2em;
    font-family: 'Chelsea Market', cursive;

`;
export default (props) => {


    
    const APP_ID = "accbd4b6";
    const APP_KEY = "00dbaccae33f10a6d1b06ceacd9e3c15";
    const [isLoading, setIsLoading] = useState(false)

    let weather;
    if (props.temperature) {
        if (props.temperature > 15) {
            weather = 'sandwich'
        }
        else {
            weather = 'soup'
        }
    }

    const url = `https://api.edamam.com/search?q=${weather}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async () => {
        if (props.temperature) {
            setIsLoading(true)
            await Axios.get(url)
                .then(result => {
                    setIsLoading(false)
                    props.setRecipes(result.data.hits)
                })
                .catch(error => {
                    setIsLoading(false)
                })
        }
    }

    useEffect(() => {
        getData()
    }, [props.temperature])

    return (
        <>
            {isLoading && <H1>The recipes are loading</H1>}
        </>
    )

}
