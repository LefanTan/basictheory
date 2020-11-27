/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'
import styles from './ChordGenerator.module.css'
import chordFret from './imgs/chordFret.png'
import noteButton from './imgs/noteButton.png'
import useViewport from '../CustomHooks'

function ChordGenerator(props){
    
    const buttonComponents = props.noteButtonPositions.map(notePos =>
    {    
        const topPos = (0.25 * Math.pow(notePos.fret, 2)) + (16.25 * notePos.fret) - 4.5; 
        const leftPos = 19 * (7 - notePos.string) - 22.5
        
        const noteButtonContainerStyle = {
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
            <div key={notePos.key} style={noteButtonContainerStyle}>
                <button className={styles.noteButton}>
                    <img src={noteButton} className={styles.noteButtonImg}/>
                </button>
                <p className={styles.noteText}>{notePos.noteType}</p>
            </div>
        )
    })

    return(
        <div className={styles.mainContainer}>
            <img src={chordFret} className={styles.mainImg} />
            {buttonComponents}
        </div>
    )
}

export default ChordGenerator;