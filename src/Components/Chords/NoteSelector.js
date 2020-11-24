/* eslint-disable react/prop-types */
import React from 'react'
import StandardButton from './StandardButton'
import styles from './NoteSelector.module.css'

/*
Note selector component
props expect styles object(styles.noteMainContainer, styles.noteButton, styles.noteButtonSharp) and onClick handler
*/
function NoteSelector(props){
    return(
        <div className={styles.noteMainContainer}>
                <div className={styles.noteButtonContainer}>
                    <StandardButton className={styles.noteButton} value='C' onClick={props.onClick}/>
                    <div>
                        <StandardButton className={styles.noteButtonSharp} value='C#' onClick={props.onClick}/>
                        <StandardButton className={styles.noteButtonSharp} value='Db' onClick={props.onClick}/>
                    </div>
                    <StandardButton className={styles.noteButton} value='D' onClick={props.onClick}/>
                    <div>
                        <StandardButton className={styles.noteButtonSharp} value='D#' onClick={props.onClick}/>
                        <StandardButton className={styles.noteButtonSharp} value='Eb' onClick={props.onClick}/>
                    </div>
                    <StandardButton className={styles.noteButton} value='E' onClick={props.onClick}/>
                    <StandardButton className={styles.noteButton} value='F' onClick={props.onClick}/>
                    <div>
                        <StandardButton className={styles.noteButtonSharp} value='C#' onClick={props.onClick}/>
                        <StandardButton className={styles.noteButtonSharp} value='Db' onClick={props.onClick}/>
                    </div>
                    <StandardButton className={styles.noteButton} value='G' onClick={props.onClick}/>
                    <div>
                        <StandardButton className={styles.noteButtonSharp} value='G#' onClick={props.onClick}/>
                        <StandardButton className={styles.noteButtonSharp} value='Ab' onClick={props.onClick}/>
                    </div>
                    <StandardButton className={styles.noteButton} value='A' onClick={props.onClick}/>
                    <div>
                        <StandardButton className={styles.noteButtonSharp} value='A#' onClick={props.onClick}/>
                        <StandardButton className={styles.noteButtonSharp} value='Bb' onClick={props.onClick}/>
                    </div>
                    <StandardButton className={styles.noteButton} value='B' onClick={props.onClick}/>
                </div>
        </div>
    )
}

export default NoteSelector;