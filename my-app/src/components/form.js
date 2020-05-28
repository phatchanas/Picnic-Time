import React from 'react'

export default (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input
            type='text'
            name='city'
            placeholder='Stad'>
            </input>
            <button>Sök</button>
        </form>
    )
}