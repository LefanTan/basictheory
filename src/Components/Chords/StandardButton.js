/* eslint-disable react/prop-types */
import React from 'react'

function StandardButton(props){
    return(
        <button className={props.className} onClick={() => props.onClick(props.value)}>
            {props.value}
        </button>
    )
}

export default StandardButton;