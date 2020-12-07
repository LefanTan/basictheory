/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'
import styles from './ChordGenerator.module.css'
import {ReactComponent as ChordFret} from './imgs/chordFret.svg'
import noteButton from './imgs/noteButton.png'
import {getFretNumber, getNoteBasedOnInterval, playSample, loadSample} from '../Helpers/HelperFunction'
import e_6 from '../Sounds/e_6.mp3'
import a_5 from '../Sounds/a_5.mp3'
import d_4 from '../Sounds/d_4.mp3'
import g_3 from '../Sounds/g_3.mp3'
import b_2 from '../Sounds/b_2.mp3'
import e_1 from '../Sounds/e_1.mp3'
import ErrorBoundary from '../Helpers/ErrorBoundary'

function ChordGenerator(props){

    function getStringSound(stringNum){
        switch(stringNum){
            case 6:
                return e_6
            case 5:
                return a_5
            case 4:
                return d_4
            case 3:
                return g_3
            case 2:
                return b_2
            case 1:
                return e_1
            default:
                return null
        }
    }

    // Buttons for numbered note buttons
    function StandardNoteButton(props){
        if(props.noteInfo.string > 6 || props.noteInfo.string < 1)
            throw new Error("Invalid string number")
           
        // Standard note button should not exceed fret no 5 and be less than fret 1 (only open string button should do that)
        if(props.noteInfo.fret > 5 || props.noteInfo.fret < 1)
            throw new Error("Invalid fret number")
        
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

        const onClickHandler = () => {
            props.onNoteClick(props.noteInfo.noteNumber)

            // Only play sound if root note prop exist
            props.rootNote && loadSample(getStringSound(props.noteInfo.string), playSample, getFretNumber(props.noteInfo.string, getNoteBasedOnInterval(props.rootNote, props.noteInfo.noteNumber)))
        }
    
        return(    
            <div style={standardButtonContainer}>
                <button data-testid='standard-button' onClick={onClickHandler} className={styles.noteButton}>
                    <img src={noteButton} className={styles.noteButtonImg}/>
                </button>
                <p className={styles.noteText}>{props.noteInfo.noteNumber}</p>
            </div>
        )
    }

    // For open string buttons such as X and O
    function OpenStringButton(props){
        if(props.noteInfo.string > 6 || props.noteInfo.string < 1)
            throw new Error("Invalid string number")
           
        // Standard note button should not exceed fret no 5 and be less than fret 1 (only open string button should do that)
        if(props.noteInfo.fret != 0)
            throw new Error("Open string button must have a prop 'fret' of 0")

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
            height: '15%',
        }

        const onClickHandler = () => {
            props.onNoteClick(props.noteInfo.noteNumber)

            // Only play sound if root note prop exist
            props.rootNote && loadSample(getStringSound(props.noteInfo.string), playSample, getFretNumber(props.noteInfo.string, getNoteBasedOnInterval(props.rootNote, props.noteInfo.noteNumber)))
        }

        return(    
            <div style={openStringButtonContainer}>
                <button data-testid='open-string-button' onClick={() => props.noteInfo.noteNumber != 'X' && onClickHandler()} className={styles.noteButton}>
                    <h3 className={props.noteInfo.noteNumber == 'X' ? styles.h3 : styles.stringNote}>
                        {/* if prop fret is 0 and isnt marked with X, it is an open string note */}
                        {props.noteInfo.fret == 0 && props.noteInfo.noteNumber != 'X' ? 'O' : props.noteInfo.noteNumber}
                    </h3>
                </button>
            </div>
        )
    }

    var fretNote = props.noteButtonPositions && props.noteButtonPositions.find(x => x.fret != 0 && x.noteNumber == '1');
    if(fretNote == undefined && props.noteButtonPositions)
        fretNote = props.noteButtonPositions.find(x => x.fret != 0 && x.noteNumber != 'X')

    var topPos = -0.75 * Math.pow(fretNote.fret, 2) + 22.5 * fretNote.fret - 12.5; 
    var fretNumContainer = {
        position: "absolute",
        top: `${topPos}%`,
        left: "-31%",

        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        textAlign: 'right',
        width: '30%',
        height: '15%'
    }
    const fretNumber = props.note && getFretNumber(fretNote.string, getNoteBasedOnInterval(props.note, fretNote.noteNumber))
    
    return(
        <ErrorBoundary
            fallback={<h2>Error loading chord</h2>}
        >
            <div className={styles.mainContainer}>
                    <ChordFret className={styles.mainImg} />
                    {props.noteButtonPositions && props.noteButtonPositions.map(noteInfo =>{
                        if(noteInfo.fret == 0 || noteInfo.noteNumber == 'X'){ 
                            return(<OpenStringButton key={props.noteButtonPositions.findIndex(x => x == noteInfo)} rootNote={props.note} onNoteClick={props.onNoteClick} noteInfo={noteInfo}/>)
                        }else{
                            return(<StandardNoteButton key={props.noteButtonPositions.findIndex(x => x == noteInfo)} rootNote={props.note} onNoteClick={props.onNoteClick} noteInfo={noteInfo}/>)
                        }
                    })}
                    <div style={fretNumContainer}>
                        <h3 data-testid='fret-number' className={styles.fretNumber}>{fretNumber === 0 ? 12 : fretNumber}</h3>
                    </div>
                </div>
        </ErrorBoundary>
    )
}

export default ChordGenerator;