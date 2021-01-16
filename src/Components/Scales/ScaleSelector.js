import React from 'react'
import StandardButton from '../StandardButton'
import styles from './ScaleSelector.module.css'
import PropTypes from 'prop-types';

/*
Scale selector component
props expect onClick handler
*/
function ScaleSelector(props){

    ScaleSelector.propTypes = {
        selectedScale: PropTypes.string,
        onClick: PropTypes.func
    }

    return(
        <div data-testid="scale-selector" className={styles.scaleMainContainer}>
            <div className={styles.scaleSubContainer}>
                <StandardButton className={props.selectedScale == 'Major' ? styles.scaleButtonSelected : styles.scaleButton} value='Major' onClick={props.onClick}/>
                <StandardButton className={props.selectedScale == 'Minor' ? styles.scaleButtonSelected : styles.scaleButton} value='Minor' onClick={props.onClick}/>    
                <StandardButton className={props.selectedScale == 'Pentatonic Major' ? styles.scaleButtonSelected : styles.scaleButton} value='Pentatonic Major' onClick={props.onClick}/>
                <StandardButton className={props.selectedScale == 'Pentatonic Minor' ? styles.scaleButtonSelected : styles.scaleButton} value='Pentatonic Minor' onClick={props.onClick}/>
                <StandardButton className={props.selectedScale == 'Blues Major' ? styles.scaleButtonSelected : styles.scaleButton} value='Blues Major' onClick={props.onClick}/>   
            </div>
            <div className={styles.scaleSubContainer}>
                <StandardButton className={props.selectedScale == 'Blues Minor' ? styles.scaleButtonSelected : styles.scaleButton} value='Blues Minor' onClick={props.onClick}/>   
                <StandardButton className={props.selectedScale == 'Harmonic Minor' ? styles.scaleButtonSelected : styles.scaleButton} value='Harmonic Minor' onClick={props.onClick}/>   
                <StandardButton className={props.selectedScale == 'Dorian' ? styles.scaleButtonSelected : styles.scaleButton} value='Dorian' onClick={props.onClick}/>    
                <StandardButton className={props.selectedScale == 'Phrygian' ? styles.scaleButtonSelected : styles.scaleButton} value='Phrygian' onClick={props.onClick}/>
                <StandardButton className={props.selectedScale == 'Lydian' ? styles.scaleButtonSelected : styles.scaleButton} value='Lydian' onClick={props.onClick}/>
                <StandardButton className={props.selectedScale == 'Mixolydian' ? styles.scaleButtonSelected : styles.scaleButton} value='Mixolydian' onClick={props.onClick}/>
                <StandardButton className={props.selectedScale == 'Locrian' ? styles.scaleButtonSelected : styles.scaleButton} value='Locrian' onClick={props.onClick}/>    
            </div>
        </div>
    )
}

export default ScaleSelector;