/* eslint-disable react/prop-types */
import React from 'react'

/*
A standard button that allows different style to be used, and also an onClick handler with it's value as paramater
*/
function StandardButton(props){
    return(
        <button className={props.className} onClick={() => props.onClick(props.value)}>
            {props.value}
        </button>
    )
}

export default StandardButton;