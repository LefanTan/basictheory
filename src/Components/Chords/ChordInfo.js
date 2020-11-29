/* eslint-disable react/prop-types */
import React, {Component} from 'react'
import styles from './ChordInfo.module.css'
import ChordGenerator from './ChordGenerator'
import {HiArrowDown} from 'react-icons/hi'

class ChordInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            moreShape: false,
            selectedNote: "None"
        }

        this.handleClick = this.handleClick.bind(this)
        this.chordGeneratorNoteClick = this.chordGeneratorNoteClick.bind(this)
    }

    handleClick(buttonClassName){
        this.setState(prevState => {
            return{
                moreShape: (buttonClassName == styles.arrowDownButton) ? !prevState.moreShape : prevState.moreShape,
                selectedNote: prevState.selectedNote
            }
        })
    }

    chordGeneratorNoteClick(note){
        this.setState({
            selectedNote: note
        })
    }

    render(){
        const notePositions = [ 
            {
                key: '1',
                note: 'C',
                noteNumber: 'b3',
                string: 1,
                fret: 2
            },
            {
                key: '2',
                note: 'E',
                noteNumber: '1',
                string: 2,
                fret: 3
            },
            {
                key: '3',
                note: 'G',
                noteNumber: '5',
                string: 3,
                fret: 2
            },
            {
                key: '4',
                note: '',
                noteNumber: 'X',
                string: 5,
                fret: 0
            },
            {
                key: '5',
                note: 'D',
                noteNumber: 'O',
                string: 3,
                fret: 0
            }
        ]

        return (
            this.props.info ?
            <div className={styles.Container}>
                <h1 className={styles.h1}>{this.props.info.FullName} Chord</h1>    
                <div className={styles.rowChordImgContainer}>
                    {/* <img className={styles.mainChordImg} src={imageDictionary("./dmajor-type1.png").default}/> */}
                    <ChordGenerator onNoteClick={this.chordGeneratorNoteClick} noteButtonPositions={notePositions}/>
                    <div className={styles.columnContainer}>
                        <div className={styles.noteDegreeRow}>
                            <h1 className={styles.h1}>C</h1> 
                            <p className={styles.p}>Root</p>
                        </div>
                        <div className={styles.noteDegreeRow}>
                            <h1 className={styles.h1}>E</h1> 
                            <p className={styles.p}>Major Third</p>
                        </div>
                        <div className={styles.noteDegreeRow}>
                            <h1 className={styles.h1}>G</h1> 
                            <p className={styles.p}>Perfect Fifth</p>
                        </div>
                        <div className={styles.noteDegreeRow}>
                            <h1 className={styles.h1}>G</h1> 
                            <p className={styles.p}>Dominant 7th</p>
                        </div>
                        <div className={styles.noteDegreeRow}>
                            <h1 className={styles.h1}>Bb</h1> 
                            <p className={styles.p}>Dominant 9th</p>
                        </div>
                        <div className={styles.noteDegreeRow}>
                            <h1 className={styles.h1}>Ab</h1> 
                            <p className={styles.p}>Perfect Fifth</p>
                        </div>
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.h2}>Description</h2>
                    <p className={styles.p}>
                        {this.props.info.Description}
                    </p>
                    <br/>
                    <h2 className={styles.h2}>Sound</h2>
                    <p className={styles.p}>
                        {this.props.info.Sound}
                    </p>
                </div>
                <br/>
                <div className={styles.rowChordImgContainer}>
                        <button className={styles.arrowDownButton} onClick={() => this.handleClick(styles.arrowDownButton)}>
                        <h2 className={styles.h2}><strong>More Shapes</strong></h2>
                            <HiArrowDown className={styles.arrowDownImg} />
                            </button>
                </div>
                <div className={this.state.moreShape ? styles.moreChordContainerActive : styles.moreChordContainer}> 
                    <div className={styles.noteDegreeRow}>
                        <h2 className={styles.h2}>Selected Note:</h2>
                        <h2>{this.state.selectedNote}</h2>
                    </div>
                    <div className={styles.moreChordRow}>
                        <ChordGenerator onNoteClick={this.chordGeneratorNoteClick} noteButtonPositions={notePositions}/>
                        <ChordGenerator onNoteClick={this.chordGeneratorNoteClick} noteButtonPositions={notePositions}/>
                    </div>
                    <div className={styles.moreChordRow}>
                        <ChordGenerator onNoteClick={this.chordGeneratorNoteClick} noteButtonPositions={notePositions}/>
                        <ChordGenerator onNoteClick={this.chordGeneratorNoteClick} noteButtonPositions={notePositions}/>
                    </div>
                </div>
            </div>
            :
            <div>
                <h1 className={styles.h1}>N/A</h1>    
            </div>
        )
    }
}

export default ChordInfo;