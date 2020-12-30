import React, { useState, useEffect } from 'react'
import styles from './ScalesPage.module.css'
import {db} from '../../Services/Firebase'
import ScalesGenerator from './ScalesGenerator'
import NoteSelector from '../NoteSelector'

export default function ScalesPage(){
    
    const [scaleData, setScaleData] = useState(undefined)

    // Pull data from firebase only on mount FOR NOW since we're only pullling one Scale information
    useEffect(() => {
        const ref = db.ref().child('ScalePage').child('ScaleType')
        const query = ref
                        .orderByKey()
                        .equalTo('PentatonicMajor')

        query.on('value', snap => {
            snap.exists() ? setScaleData(snap.val()['PentatonicMajor']) : setScaleData('nice')
        })
    },[])

    return(
        <div className={styles.mainContainer}>
            <div className={styles.noteSelectorContainer}>
                <NoteSelector/>
            </div>
            <div className={styles.scaleGeneratorContainer}>
                <ScalesGenerator intervals={scaleData && scaleData['Notes']}/>
            </div>
        </div>
    )
}