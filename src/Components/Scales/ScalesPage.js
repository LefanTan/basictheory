import React, { useState, useEffect } from 'react'
import styles from './ScalesPage.module.css'
import {db} from '../../Services/Firebase'
import useViewport from '../Helpers/CustomHooks'
import ScalesGenerator from './ScalesGenerator'
import ScaleSelector from './ScaleSelector'
import NoteSelector from '../NoteSelector'
import { isMobile } from 'react-device-detect'

export default function ScalesPage(){
    
    const [scaleData, setScaleData] = useState(undefined)
    const [selectedNote, setNote] = useState('C')
    const [selectedScale, setScale] = useState('Major')
    const {width, height} = useViewport()

    useEffect(() => {
        const ref = db.ref().child('ScalePage').child('ScaleType')
        const query = ref
                        .orderByKey()
                        .equalTo(selectedScale)

        query.on('value', snap => {
            snap.exists() ? setScaleData(snap.val()[selectedScale]) : setScaleData('nice')
        })
    },[selectedScale], [])

    return(
        <div className={styles.mainContainer} style={{'--scales-generator-height': `${(isMobile) && width < height ? '17.5vh' : '30vh'}`, '--scales-selector-height': `${(isMobile) ? '10%' : '7.5%'}`}}>
            <div className={styles.noteSelectorContainer}>
                <NoteSelector selectedNote={selectedNote} onClick={value => setNote(value)}/>
            </div>
            <div className={styles.scaleGeneratorContainer}>
                <ScalesGenerator note={selectedNote} intervals={scaleData && scaleData['Notes']}/>
            </div>
            <div className={styles.scaleSelectorContainer}>
                <ScaleSelector selectedScale={selectedScale} onClick={value => setScale(value)}/>
            </div>
        </div>
    )
}