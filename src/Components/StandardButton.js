import React from 'react'
import PropTypes from 'prop-types';
/*
A standard button that allows different style to be used, and also an onClick handler with it's value as paramater
*/
function StandardButton(props){
    StandardButton.propTypes = {
        className: PropTypes.string,
        value: PropTypes.string,
        onClick: PropTypes.func
    }

    return(
        <button className={props.className} onClick={() => props.onClick(props.value)}>
            {props.value}
        </button>
    )
}

export default StandardButton;