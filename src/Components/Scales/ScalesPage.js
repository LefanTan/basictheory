import React from 'react'
import styles from './ScalesPage.module.css'
import ScalesGenerator from './ScalesGenerator'
import ScaleSelector from './ScaleSelector'
import NoteSelector from '../NoteSelector'

export default function ScalesPage(){
    return(
        <div className={styles.mainContainer}>
            <div className={styles.noteSelectorContainer}>
                <NoteSelector/>
            </div>
            <div className={styles.scaleGeneratorContainer}>
                <ScalesGenerator />
            </div>
            <div className={styles.scaleSelectorContainer}>
                <ScaleSelector/>
            </div>
        </div>
    )
}