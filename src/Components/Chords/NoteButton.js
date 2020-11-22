/* eslint-disable react/prop-types */
import React from 'react'

function NoteButton(props){
    return(
        <button className={props.className} onClick={() => props.onClick(props.note)}>
            {props.note}
        </button>
    )
}

export default NoteButton;