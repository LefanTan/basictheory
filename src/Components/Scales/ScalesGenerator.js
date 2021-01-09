import React, { useEffect, useState} from 'react'
import styles from './ScalesGenerator.module.css'
import PropTypes from 'prop-types';
import * as Md from "react-icons/md";
import {isMobileOnly, isBrowser, isTablet} from 'react-device-detect';
import {ReactComponent as ScaleButtonOpaque} from './imgs/scaleButtonOpaque.svg'
import {ReactComponent as Fret} from './imgs/fretBoard.svg'
import { getFretNumber, getNoteBasedOnInterval, getNoteFromFretNumber } from '../Helpers/HelperFunction';

// Produce a fret board of 18 frets
// Also generate a scale based on the CAGED system
export default function ScalesGenerator(props){
    const stringNotes = ['E', 'A', 'D', 'G', 'B', 'E']
    const [showAll, setShowAll] = useState(true)

    function ScalesButton(props){
        var topPos = 20 * props.string - 28
        var leftPos = -1 + 5.5 * props.fret
    
        var scaleButtonContainer = {
            position: 'absolute',       
            top: `${topPos}%`,
            left: `${leftPos}%`,
    
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '3%',
            height: '15%'
        }

        ScalesButton.propTypes = {
            onClick: PropTypes.func,
            fret: PropTypes.number,
            string: PropTypes.number,
            isRoot: PropTypes.bool
        }
        
        return(
            <div style={scaleButtonContainer}>
                <button className={styles.scaleButton} onClick={props.onClick}>
                    <ScaleButtonOpaque className={props.isRoot ? styles.scaleButtonOutlineImg : styles.scaleButtonImg}/>
                </button>
                
                <p className={props.isRoot ? styles.scaleButtonRootText : styles.scaleButtonText} style={{fontSize: `${isMobileOnly ? '50%' : '1vw'}`}}>{
                    // eslint-disable-next-line react/prop-types
                    props && props.children
                }</p>
            </div>
        )
    }

    // Generate a scale with a given shape using the CAGED system
    function ScaleShape(props){
        var startingRootNotePosition = 0;
        var startingNotePosition = 0;
        const notesFromInterval = (props.intervals && props.rootNote) && props.intervals.map(i => getNoteBasedOnInterval(props.rootNote, i))

        
        // Create a full Scale if showAll is true
        if(props.showAll){
            var buttons = []
            for(let i = 1; i < 7; i++){
                for(let j = 0; j < 18; j++){
                    var fretNote = getNoteFromFretNumber(i,j)
                    if(notesFromInterval && notesFromInterval.includes(fretNote))
                        buttons.push(<ScalesButton key={`${i} ${j}`} isRoot={fretNote === props.rootNote || (props.rootNote.length > 1 && fretNote.includes(props.rootNote))} fret={j} string={i}>{props.intervals[notesFromInterval.indexOf(fretNote)]}</ScalesButton>)
                }
            }
        }
        else{
            if(props.shape == 'C'){
                startingRootNotePosition = getFretNumber(5, props.rootNote)
                for(let i = 0; i < props.intervals.length; i++){
                    startingNotePosition = getFretNumber(6, getNoteBasedOnInterval(props.rootNote, props.intervals[i]))
                    // If the distance is less than 3, we found our starting note position
                    if(Math.abs(startingRootNotePosition - startingNotePosition) <= 3) break;
                }
            }
        }
        
        ScaleShape.propTypes = {
            intervals: PropTypes.array,
            rootNote: PropTypes.string,
            shape: PropTypes.string,
            showAll: PropTypes.bool
        }

        return(
            <div>
                {buttons}
            </div>
        )
    }

    var imgContainer = {
        position: 'relative',
        maxHeight: '100%',
        flexGrow: '1',
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: `${isMobileOnly ? '0%' : '20%'}`,
        marginLeft: `${isMobileOnly ? '5%' : '0%'}`
    }
    var buttonContainer = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    
        whiteSpace: 'nowrap',
        width:  `${!isBrowser ? '35%' : '15%'}`,
        height: '100%',
    
        margin: `${isMobileOnly ? '0%' : '2%'}`
    }

    // Props validation
    ScalesGenerator.propTypes = {
        intervals: PropTypes.array,
        note: PropTypes.string,
    }
    
    return(
        <div className={styles.Container}>
            <div style={buttonContainer}>
                <button className={showAll ? styles.showAllButtonActive : styles.showAllButton} onClick={() => setShowAll(!showAll)}><h3>Show All</h3></button>
                <button className={styles.emptyShellButton}><Md.MdNavigateBefore className={styles.nextImg}/></button>
                <button className={styles.emptyShellButton}><Md.MdNavigateNext className={styles.nextImg}/></button>
            </div>
            <div style={imgContainer}>  
                <Fret className={styles.Img}/>
                {stringNotes.map((note, index) => {
                    // just some equation to position the note letters
                    var noteTopPos = 50 - 20.5 * index 
                    
                    var stringName ={
                        position: 'absolute',
                        top: `${noteTopPos}%`,
                        left: '-35px',

                        width: 'fit-content',
                        height: '100%',
                    
                        display: 'flex',
                        flexFlow: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                    return(
                        <div key={index} style={stringName}>
                            <h3 className={styles.h3}>{note}</h3>
                        </div>
                    )}
                )}
                {/* {buttons} */}
                <ScaleShape showAll={showAll} rootNote={props.note} intervals={props.intervals} shape={'C'}/>
            </div>
        </div>
    )
}