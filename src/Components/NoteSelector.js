import React from 'react'
import PropTypes from 'prop-types';
import StandardButton from './StandardButton'
import styles from './NoteSelector.module.css'

/*
Note selector component
props expect onClick handler
*/
function NoteSelector(props){
    NoteSelector.propTypes = {
        selectedNote: PropTypes.string,
        onClick: PropTypes.func
    }

    return(
        <div data-testid="note-selector" className={styles.noteMainContainer}>
                <StandardButton className={props.selectedNote == 'C' ? styles.noteButtonSelected : styles.noteButton} value='C' onClick={props.onClick}/>
                <div className={styles.sharpContainer}>
                    <StandardButton className={props.selectedNote == 'C#' ? styles.noteButtonSharpSelected : styles.noteButtonSharp} value='C#' onClick={props.onClick}/>
                    <StandardButton className={props.selectedNote == 'Db' ? styles.noteButtonSharpSelected : styles.noteButtonSharp} value='Db' onClick={props.onClick}/>
                </div>
                <StandardButton className={props.selectedNote == 'D' ? styles.noteButtonSelected : styles.noteButton} value='D' onClick={props.onClick}/>
                <div className={styles.sharpContainer}>
                    <StandardButton className={props.selectedNote == 'D#' ? styles.noteButtonSharpSelected : styles.noteButtonSharp} value='D#' onClick={props.onClick}/>
                    <StandardButton className={props.selectedNote == 'Eb' ? styles.noteButtonSharpSelected : styles.noteButtonSharp} value='Eb' onClick={props.onClick}/>
                </div>
                <StandardButton className={props.selectedNote == 'E' ? styles.noteButtonSelected : styles.noteButton} value='E' onClick={props.onClick}/>
                <StandardButton className={props.selectedNote == 'F' ? styles.noteButtonSelected : styles.noteButton} value='F' onClick={props.onClick}/>
                <div className={styles.sharpContainer}>
                    <StandardButton className={props.selectedNote == 'F#' ? styles.noteButtonSharpSelected : styles.noteButtonSharp} value='F#' onClick={props.onClick}/>
                    <StandardButton className={props.selectedNote == 'Gb' ? styles.noteButtonSharpSelected : styles.noteButtonSharp} value='Gb' onClick={props.onClick}/>
                </div>
                <StandardButton className={props.selectedNote == 'G' ? styles.noteButtonSelected : styles.noteButton} value='G' onClick={props.onClick}/>
                <div className={styles.sharpContainer}>
                    <StandardButton className={props.selectedNote == 'G#' ? styles.noteButtonSharpSelected : styles.noteButtonSharp} value='G#' onClick={props.onClick}/>
                    <StandardButton className={props.selectedNote == 'Ab' ? styles.noteButtonSharpSelected : styles.noteButtonSharp} value='Ab' onClick={props.onClick}/>
                </div>
                <StandardButton className={props.selectedNote == 'A' ? styles.noteButtonSelected : styles.noteButton} value='A' onClick={props.onClick}/>
                <div className={styles.sharpContainer}>
                    <StandardButton className={props.selectedNote == 'A#' ? styles.noteButtonSharpSelected : styles.noteButtonSharp} value='A#' onClick={props.onClick}/>
                    <StandardButton className={props.selectedNote == 'Bb' ? styles.noteButtonSharpSelected : styles.noteButtonSharp} value='Bb' onClick={props.onClick}/>
                </div>
                <StandardButton className={props.selectedNote == 'B' ? styles.noteButtonSelected : styles.noteButton} value='B' onClick={props.onClick}/>
        </div>
    )
}

export default NoteSelector;