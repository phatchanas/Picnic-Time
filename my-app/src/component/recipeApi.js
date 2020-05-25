import React from 'react';
import Axios from 'axios'

export default (props) => {
    const APP_ID = "accbd4b6";
    
    const APP_KEY = "00dbaccae33f10a6d1b06ceacd9e3c15";
    const weather = props.warm === 'warm' ? 'sandwich' : 'soup'

    const url = `https://api.edamam.com/search?q=${weather}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async () => {
        const result = await Axios.get(url)
        console.log(result)
        props.setRecipes(result.data.hits)
        /*if under 18 {
            props.setRecipe(result)

        }*/
    }

    return(
        <h1 onClick={getData}>CLICK HERE</h1>
    )

}
