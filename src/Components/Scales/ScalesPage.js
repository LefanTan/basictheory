import React from 'react'
import styles from './ScalesPage.module.css'

import NoteSelector from '../NoteSelector'

export default function ScalesPage(){
    return(
        <div className={styles.mainContainer}>
            <NoteSelector />
            <h1>Scales</h1>
        </div>
    )
}