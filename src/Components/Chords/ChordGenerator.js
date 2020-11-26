import React from 'react'
import styles from './ChordGenerator.module.css'
import chordFret from './imgs/chordFret.png'
import noteButton from './imgs/noteButton.png'

function ChordGenerator(){
    const amt = 15;

    const noteButtonContainerStyle ={
        position: 'absolute',
        top: amt,
        left: '-7.5px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '15%',
        height: '15%'
    }

    return(
        <div className={styles.mainContainer}>
            <img src={chordFret} className={styles.mainImg} />
            <div style={noteButtonContainerStyle}>
                <button className={styles.noteButton}>
                    <img src={noteButton} className={styles.noteButtonImg}/>
                </button>
                <p className={styles.noteText}>1</p>
            </div>
                
                
            
        </div>
    )
}

export default ChordGenerator;