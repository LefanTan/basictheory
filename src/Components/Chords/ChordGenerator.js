/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'
import styles from './ChordGenerator.module.css'
import chordFret from './imgs/chordFret.png'
import noteButton from './imgs/noteButton.png'
import useViewport from '../CustomHooks'
import { render } from 'react-dom'

function ChordGenerator(props){

    // Buttons for numbered note buttons
    function StandardNoteButton(props){
        const topPos = -0.25 * Math.pow(props.noteInfo.fret, 2) + 19.25 * props.noteInfo.fret - 8.5; 
        const leftPos = 19 * (7 - props.noteInfo.string) - 22.5
        
        const standardButtonContainer = {
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
                <button onClick={() => props.onNoteClick(props.noteInfo.note)} className={styles.noteButton}>
                    <img src={noteButton} className={styles.noteButtonImg}/>
                </button>
                <p className={styles.noteText}>{props.noteInfo.noteNumber}</p>
            </div>
        )
    }

    // For open string buttons such as X and O
    function OpenStringButton(props){
        const leftPos = 19 * (7 - props.noteInfo.string) - 23.5

        const openStringButtonContainer = {
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
                <button onClick={() => props.noteInfo.noteNumber != 'X' && props.onNoteClick(props.noteInfo.note)} className={styles.noteButton}>
                    <h3 className={props.noteInfo.noteNumber == 'X' ? styles.h3 : styles.openString}>{props.noteInfo.noteNumber}</h3>
                </button>
            </div>
        )
    }

    return(
        <div className={styles.mainContainer}>
            <img src={chordFret} className={styles.mainImg} />
            {props.noteButtonPositions.map(noteInfo =>{
                if(noteInfo.fret == 0){
                    return(<OpenStringButton key={noteInfo.key} onNoteClick={props.onNoteClick} noteInfo={noteInfo}/>)
                }else{
                    return(<StandardNoteButton key={noteInfo.key} onNoteClick={props.onNoteClick} noteInfo={noteInfo}/>)
                }
            })}
    
            <h3 className={styles.fretNumber}>{props.startingFret}</h3>
        </div>
    )
}

export default ChordGenerator;