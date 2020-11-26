import React, {Component} from 'react'
import styles from './ChordInfo.module.css'
import ChordGenerator from './ChordGenerator'

class ChordInfo extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        // Get all the possible images
        const imageDictionary = require.context("./imgs", true, /.png$/)

        return (
            <div className={styles.Container}>
                <h1 className={styles.h1}>Major 7th chord</h1>    
                <div className={styles.rowContainer}>
                    {/* <img className={styles.mainChordImg} src={imageDictionary("./dmajor-type1.png").default}/> */}
                    <ChordGenerator />
                    <div className={styles.columnContainer}>
                        <div className={styles.noteDegreeRow}>
                            <h1 className={styles.h1}>C</h1> 
                            <p className={styles.p}>Root</p>
                            <h2 className={styles.h2}>(I)</h2>
                        </div>
                        <div className={styles.noteDegreeRow}>
                            <h1 className={styles.h1}>E</h1> 
                            <p className={styles.p}>Major Third</p>
                            <h2 className={styles.h2}>(iii)</h2>
                        </div>
                        <div className={styles.noteDegreeRow}>
                            <h1 className={styles.h1}>G</h1> 
                            <p className={styles.p}>Perfect Fifth</p>
                            <h2 className={styles.h2}>(V)</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.rowContainer}>
                    <h2 className={styles.h2}>Chord Function</h2>
                </div>
            </div>
        )
    }
}

export default ChordInfo;