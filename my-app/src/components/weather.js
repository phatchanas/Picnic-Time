import React from 'react'


export default ({city, temperatur, description, error}) => {
    return (
        <div>
            {city && <p>{city}</p>}
            {temperatur && <p>{temperatur} °C</p>}
            {description && <p>{description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}
