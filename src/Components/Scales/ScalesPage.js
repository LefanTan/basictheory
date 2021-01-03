import React, { useState, useEffect } from 'react'
import styles from './ScalesPage.module.css'
import {db} from '../../Services/Firebase'
import useViewport from '../Helpers/CustomHooks'
import ScalesGenerator from './ScalesGenerator'
import NoteSelector from '../NoteSelector'
import { isMobileOnly } from 'react-device-detect'

export default function ScalesPage(){
    
    const [scaleData, setScaleData] = useState(undefined)
    const [selectedNote, setNote] = useState('C')
    const {width, height} = useViewport()

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
        <div className={styles.mainContainer} style={{'--scales-generator-height': `${(isMobileOnly && width < height) ? '11vh' : '30vh'}`}}>
            <div className={styles.noteSelectorContainer}>
                <NoteSelector selectedNote={selectedNote} onClick={value => setNote(value)}/>
            </div>
            <div className={styles.scaleGeneratorContainer}>
                <ScalesGenerator note={selectedNote} intervals={scaleData && scaleData['Notes']}/>
            </div>
        </div>
    )
}