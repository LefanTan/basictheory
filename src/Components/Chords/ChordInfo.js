/* eslint-disable react/prop-types */
import React, {Component} from 'react'
import {db} from '../../Services/Firebase'
import styles from './ChordInfo.module.css'
import ChordGenerator from './ChordGenerator'
import {getNoteBasedOnInterval} from '../Helpers/HelperFunction'
import {HiArrowDown} from 'react-icons/hi'

class ChordInfo extends Component{

    constructor(props){
        super(props)
        this.state = {
            moreShape: false,
            selectedNote: "None",
            openChordData: undefined,
            shapeList: undefined,
        }

        this.updateOpenChordData = this.updateOpenChordData.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.chordGeneratorNoteClick = this.chordGeneratorNoteClick.bind(this)
    }

    // Handle general button click
    handleClick(buttonClassName){
        this.setState(prevState => {
            return{
                moreShape: (buttonClassName == styles.arrowDownButton) ? !prevState.moreShape : prevState.moreShape
            }
        })
    }

    // Invoked when a note button from a generated chord is clicked
    chordGeneratorNoteClick(noteNum){
        this.setState({
            selectedNote: getNoteBasedOnInterval(this.props.note, noteNum)
        })
    }

    // Query for openchord data based on the current note and chord
    updateOpenChordData(){
        // If props.chord and info doesn't exist, it's an invalid chord
        if(!(this.props.chord && this.props.info))
            return

        const chordName = `${this.props.note}${this.props.chord}`
        const openChordRef = db.ref().child('ChordPage').child('OpenChords')
        const query = openChordRef.
                            orderByKey().
                            equalTo(chordName)

        query.on('value', snap =>{
            this.setState({
                openChordData: snap.exists() ? snap.val()[chordName] : "",
                shapeList: snap.exists() ? this.props.info.Shapes : this.props.info.Shapes.slice(1)
            })
        })
    }

    // Query data for the first default chord
    componentDidMount(){
        this.updateOpenChordData();
    }

    componentDidUpdate(prevProps){
        if(prevProps != this.props){
            // Reset if selectedNote or selectedChord changed
            this.setState({selectedNote : "None"})

            // If theres note/chord change, check if the openchord data exist
            this.updateOpenChordData();
        }
    }

    render(){
        return (
            this.props.info ?

            <div className={styles.Container}>
                <h1 data-testid='chordinfo-title' className={styles.h1}>{this.props.info.FullName} Chord</h1>    
                <div className={styles.rowChordImgContainer}>
                    <ChordGenerator note={this.props.note} onNoteClick={this.chordGeneratorNoteClick} noteButtonPositions={this.state.openChordData ? this.state.openChordData['Notes'] : this.props.info.Shapes[0]['Notes']}/>
                    <div className={styles.columnContainer}>
                        {this.props.info.Notes.map(note => 
                            <div key={note.name} className={styles.noteDegreeRow}>
                                <h1 className={styles.noteText}>{getNoteBasedOnInterval(this.props.note, note.num)}</h1> 
                                <p className={styles.p}>{note.name}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.noteDegreeRow}>
                        <h2 className={styles.h2}>Selected Note:</h2>
                        <h2 data-testid='selected'>{this.state.selectedNote}</h2>
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
                    {this.state.shapeList && 
                        this.state.shapeList.map(shape => 
                            <ChordGenerator key={this.state.shapeList.findIndex(x => x == shape)} note={this.props.note} onNoteClick={this.chordGeneratorNoteClick} noteButtonPositions={shape['Notes']}/>
                        )}
                    </div>
                </div>
            </div>
            :

            // If the info doesn't exist yet, print N/A
            <div>
                <h1 className={styles.p}>Loading...</h1>    
            </div>
        )
    }
}

export default ChordInfo;