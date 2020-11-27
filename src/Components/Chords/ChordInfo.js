import React, {Component} from 'react'
import styles from './ChordInfo.module.css'
import ChordGenerator from './ChordGenerator'
import useViewport from '../CustomHooks'

class ChordInfo extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        const notePositions = [
            {
                key: 1,
                noteType: 3,
                string: 1,
                fret: 2
            },
            {
                key: 2,
                noteType: 1,
                string: 2,
                fret: 3
            },
            {
                key: 3,
                noteType: 5,
                string: 3,
                fret: 2
            }
        ]

        return (
            <div className={styles.Container}>
                <h1 className={styles.h1}>Major 7th chord</h1>    
                <div className={styles.rowChordImgContainer}>
                    {/* <img className={styles.mainChordImg} src={imageDictionary("./dmajor-type1.png").default}/> */}
                    <ChordGenerator  noteButtonPositions={notePositions}/>
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
                <div className={styles.textContainer}>
                    <h2 className={styles.h2}>Chord Function</h2>
                    <p className={styles.p}>
                        In our major scale, we have two notes that are half steps away from another.
                        These notes are F and B. Because of the conflict between these notes and the tonic
                        notes they are a half step apart from, these notes are like “aliens”.
                        They come to visit, but they don’t belong and can’t stay forever.
                    </p>
                    <br/>
                    <h2 className={styles.h2}>Tonic Function</h2>
                    <p className={styles.p}>
                    In tonal harmony, the tonic chord (“I”) has a sound that makes us feel like we’re at home. 
                    The other chords have a function determined by how far away from home base that chord is. 
                    The two notes that are furthest from home base are the aliens: F and B. A chord’s function is largely determined by how much “F” and “B” it has in it, with the chords that pull “out” the most having both and the chords that pull “in” the most having neither.
                    </p>
                </div>
            </div>
        )
    }
}

export default ChordInfo;