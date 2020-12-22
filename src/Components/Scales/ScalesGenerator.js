import React from 'react'
import styles from './ScalesGenerator.module.css'
import {ReactComponent as Fret} from './imgs/fretBoard.svg'

export default function ScalesGenerator(props){
    return(
        <div className={styles.Container}>
            <div className={styles.imgContainer}>
                <div className={styles.stringName}>
                    <h2 className={styles.h2}>E</h2>
                    <h2 className={styles.h2}>B</h2>
                    <h2 className={styles.h2}>G</h2>
                    <h2 className={styles.h2}>D</h2>
                    <h2 className={styles.h2}>A</h2>
                    <h2 className={styles.h2}>E</h2>
                </div>
                <Fret className={styles.Img}/>
            </div>
        </div>
    )
}