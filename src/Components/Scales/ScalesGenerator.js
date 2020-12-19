import React from 'react'
import styles from './ScalesGenerator.module.css'
import {ReactComponent as Fret} from './imgs/fretBoard.svg'

export default function ScalesGenerator(props){
    return(
        <div className={styles.Container}>
            <Fret className={styles.Img}/>
        </div>
    )
}