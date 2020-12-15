import React from 'react'
import styles from './ScalesPage.module.css'

import NoteSelector from '../NoteSelector'

export default function ScalesPage(){
    return(
        <div className={styles.mainContainer}>
            <div className={styles.noteSelectorContainer}>
                <NoteSelector/>
            </div>
        </div>
    )
}