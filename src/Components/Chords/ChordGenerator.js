/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'
import styles from './ChordGenerator.module.css'
import chordFret from './imgs/chordFret.png'
import noteButton from './imgs/noteButton.png'
import {getFretNumber, getNoteBasedOnInterval} from '../Helpers/HelperFunction'

function ChordGenerator(props){

    // Buttons for numbered note buttons
    function StandardNoteButton(props){
        var topPos = -0.25 * Math.pow(props.noteInfo.fret, 2) + 19.25 * props.noteInfo.fret - 8.5; 
        var leftPos = 19 * (7 - props.noteInfo.string) - 22.5
        
        var standardButtonContainer = {
            position: 'absolute',       
            top: `${topPos}%`,
            left: `${leftPos}%`,
    
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '15%',
            height: '15%'
        }

        return(    
            <div style={standardButtonContainer}>
                <button onClick={() => props.onNoteClick(props.noteInfo.noteNumber)} className={styles.noteButton}>
                    <img src={noteButton} className={styles.noteButtonImg}/>
                </button>
                <p className={styles.noteText}>{props.noteInfo.noteNumber}</p>
            </div>
        )
    }

    // For open string buttons such as X and O
    function OpenStringButton(props){
        var leftPos = 19 * (7 - props.noteInfo.string) - 23.5

        var openStringButtonContainer = {
            position: 'absolute',       
            top: '-30px',
            left: `${leftPos}%`,
    
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '15%',
            height: '15%'
        }

        return(    
            <div style={openStringButtonContainer}>
                <button onClick={() => props.noteInfo.noteNumber != 'X' && props.onNoteClick(props.noteInfo.noteNumber)} className={styles.noteButton}>
                    <h3 className={props.noteInfo.noteNumber == 'X' ? styles.h3 : styles.stringNote}>
                        {props.noteInfo.fret == 0 && props.noteInfo.noteNumber != 'X' ? 'O' : props.noteInfo.noteNumber}
                    </h3>
                </button>
            </div>
        )
    }

    var fretNote = props.noteButtonPositions && props.noteButtonPositions.find(x => x.fret != 0 && x.noteNumber == '1');
    if(fretNote == undefined && props.noteButtonPositions)
        fretNote = props.noteButtonPositions.find(x => x.noteNumber != 0 && x.noteNumber != 'X')

    var topPos = -0.75 * Math.pow(fretNote.fret, 2) + 22.5 * fretNote.fret - 12.5; 
    var fretNumContainer = {
        position: "absolute",
        top: `${topPos}%`,
        left: "-27.5px",

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '15%',
        height: '15%',
    }

    return(
        <div className={styles.mainContainer}>
            <img src={chordFret} className={styles.mainImg} />
            {props.noteButtonPositions && props.noteButtonPositions.map(noteInfo =>{
                if(noteInfo.fret == 0){ 
                    return(<OpenStringButton key={props.noteButtonPositions.findIndex(x => x == noteInfo)} onNoteClick={props.onNoteClick} noteInfo={noteInfo}/>)
                }else{
                    return(<StandardNoteButton key={props.noteButtonPositions.findIndex(x => x == noteInfo)} onNoteClick={props.onNoteClick} noteInfo={noteInfo}/>)
                }
            })}
            <div style={fretNumContainer}>
                <h3 className={styles.fretNumber}>{getFretNumber(fretNote.string, getNoteBasedOnInterval(props.note, fretNote.noteNumber))}</h3>
            </div>
        </div>
    )
}

export default ChordGenerator;