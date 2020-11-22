/* eslint-disable react/prop-types */
import React from 'react'
import NoteButton from './NoteButton'

function NoteButtonContainer(props){
    return(
        <div className={props.styles.Container}>
                <div className={props.styles.noteButtonContainer}>
                    <NoteButton className={props.styles.noteButton} note='C' onClick={props.onClick}/>
                    <div>
                        <NoteButton className={props.styles.noteButtonSharp} note='C#' onClick={props.onClick}/>
                        <NoteButton className={props.styles.noteButtonSharp} note='Db' onClick={props.onClick}/>
                    </div>
                    <NoteButton className={props.styles.noteButton} note='D' onClick={props.onClick}/>
                    <div>
                        <NoteButton className={props.styles.noteButtonSharp} note='D#' onClick={props.onClick}/>
                        <NoteButton className={props.styles.noteButtonSharp} note='Eb' onClick={props.onClick}/>
                    </div>
                    <NoteButton className={props.styles.noteButton} note='E' onClick={props.onClick}/>
                    <NoteButton className={props.styles.noteButton} note='F' onClick={props.onClick}/>
                    <div>
                        <NoteButton className={props.styles.noteButtonSharp} note='C#' onClick={props.onClick}/>
                        <NoteButton className={props.styles.noteButtonSharp} note='Db' onClick={props.onClick}/>
                    </div>
                    <NoteButton className={props.styles.noteButton} note='G' onClick={props.onClick}/>
                    <div>
                        <NoteButton className={props.styles.noteButtonSharp} note='G#' onClick={props.onClick}/>
                        <NoteButton className={props.styles.noteButtonSharp} note='Ab' onClick={props.onClick}/>
                    </div>
                    <NoteButton className={props.styles.noteButton} note='A' onClick={props.onClick}/>
                    <div>
                        <NoteButton className={props.styles.noteButtonSharp} note='A#' onClick={props.onClick}/>
                        <NoteButton className={props.styles.noteButtonSharp} note='Bb' onClick={props.onClick}/>
                    </div>
                    <NoteButton className={props.styles.noteButton} note='B' onClick={props.onClick}/>
                </div>
            </div>
    )
}

export default NoteButtonContainer;