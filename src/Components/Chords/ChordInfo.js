/* eslint-disable react/prop-types */
import React, {Component} from 'react'
import styles from './ChordInfo.module.css'
import ChordGenerator from './ChordGenerator'
import GetNoteBasedOnInterval from '../Helpers/HelperFunction'
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
                moreShape: (buttonClassName == styles.arrowDownButton) ? !prevState.moreShape : prevState.moreShape
            }
        })
    }

    chordGeneratorNoteClick(note){
        this.setState({
            selectedNote: GetNoteBasedOnInterval(this.props.note, note)
        })
    }

    componentDidUpdate(prevProps){
        // Reset if selectedNote or selectedChord changed
        if(prevProps != this.props){
            this.setState({selectedNote : "None"})
        }
    }

    render(){
        return (
            this.props.info ?
        
            <div className={styles.Container}>
                <h1 className={styles.h1}>{this.props.info.FullName} Chord</h1>    
                <div className={styles.rowChordImgContainer}>
                    <ChordGenerator onNoteClick={this.chordGeneratorNoteClick}/>
                    <div className={styles.columnContainer}>
                        {this.props.info.Notes.map(note => 
                            <div key={note.name} className={styles.noteDegreeRow}>
                                <h1 className={styles.noteText}>{GetNoteBasedOnInterval(this.props.note, note.num)}</h1> 
                                <p className={styles.p}>{note.name}</p>
                            </div>
                        )}
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
                        {this.props.info.Shapes && this.props.info.Shapes.map(shape => 
                              <ChordGenerator key={this.props.info.Shapes.findIndex(x => x == shape)} onNoteClick={this.chordGeneratorNoteClick} noteButtonPositions={shape['Notes']}/>
                        )}
                    </div>
                </div>
            </div>
            :

            // If the info doesn't exist, print N/A
            <div>
                <h1 className={styles.h1}>N/A</h1>    
            </div>
        )
    }
}

export default ChordInfo;