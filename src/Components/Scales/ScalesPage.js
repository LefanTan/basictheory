import React, { useState, useEffect } from 'react'
import styles from './ScalesPage.module.css'
import {db} from '../../Services/Firebase'
import ScalesGenerator from './ScalesGenerator'
import NoteSelector from '../NoteSelector'

export default function ScalesPage(){
    
    const [scaleData, setScaleData] = useState(undefined)

    // Pull data from firebase only on mount FOR NOW since we're only pullling Major Scale information
    useEffect(() => {
        const ref = db.ref().child('ScalePage').child('ScaleType')
        const query = ref
                        .orderByKey()
                        .equalTo('Major')

        query.on('value', snap => {
            snap.exists() ? setScaleData(snap.val()['Major']) : setScaleData('nice')
        })
    },[])

    return(
        <div className={styles.mainContainer}>
            <div className={styles.noteSelectorContainer}>
                <NoteSelector/>
            </div>
            <div className={styles.scaleGeneratorContainer}>
                <ScalesGenerator notes={scaleData && scaleData['Notes']}/>
            </div>
        </div>
    )
}