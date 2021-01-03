import React, {Component} from 'react'
import {db} from '../../Services/Firebase'
import styles from './ScaleInfo.module.css'
import PropTypes from 'prop-types';
import ScalesGenerator from './ScalesGenerator'
import {getNoteBasedOnInterval} from '../Helpers/HelperFunction'
import {HiArrowDown} from 'react-icons/hi'

class ScaleInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            showAbout: false,
            showNotes: false,
            showUseCases: false,

        }

        // this.updateOpenChordData = this.updateOpenChordData.bind(this)
        // this.handleClick = this.handleClick.bind(this)
        // this.chordGeneratorNoteClick = this.chordGeneratorNoteClick.bind(this)
    }

    // Handle general button click
    handleClick(buttonClassName){
        // this.setState(prevState => {
        //     return{
        //         moreShape: (buttonClassName == styles.arrowDownButton) ? !prevState.moreShape : prevState.moreShape
        //     }
        // })
    }

    // Invoked when a note button from a generated scale is clicked
    // chordGeneratorNoteClick(noteNum){
    //     this.setState({
    //         selectedNote: getNoteBasedOnInterval(this.props.note, noteNum)
    //     })
    // }

    // Query for openchord data based on the current note and chord
    // updateOpenChordData(){
    //     // If props.chord and info doesn't exist, it's an invalid chord
    //     if(!(this.props.chord && this.props.info))
    //         return

    //     const chordName = `${this.props.note}${this.props.chord}`
    //     const openChordRef = db.ref().child('ChordPage').child('OpenChords')
    //     const query = openChordRef.
    //                         orderByKey().
    //                         equalTo(chordName)

    //     query.on('value', snap => {
    //         this.setState({
    //             openChordData: snap.exists() ? snap.val()[chordName] : "",
    //             shapeList: snap.exists() ? this.props.info.Shapes : this.props.info.Shapes.slice(1)
    //         })
    //     })
    // }

    // Query data for the first default chord
    componentDidMount(){
        // this.updateOpenChordData();
    }

    componentDidUpdate(prevProps){
        // if(prevProps != this.props){
        //     // Reset if selectedNote or selectedChord changed
        //     this.setState({selectedNote : "None"})

        //     // If theres note/chord change, check if the openchord data exist
        //     this.updateOpenChordData();
        // }
    }

    render(){
        if(!this.props.info && !this.props.scale){
            return(
                <div>
                    <h1 className={styles.p}>Select A Scale</h1>    
                </div>
            )
        }
        else if(!this.props.info){
            return(
                <div>
                    <h1 className={styles.p}>Loading...</h1>    
                </div>
            )
        }
        else{
            return(
                <div className={styles.Container}>
                    <div className={styles.aboutContainer}>
                        <button className={styles.arrowDownButton} onClick={() => this.handleClick(styles.arrowDownButton)}>
                            <h2 className={styles.h2}><strong>About</strong></h2>
                            <HiArrowDown className={styles.arrowDownImg} />
                        </button>
                    </div>
                    <div className={styles.notesContainer}>
                        <button className={styles.arrowDownButton} onClick={() => this.handleClick(styles.arrowDownButton)}>
                            <h2 className={styles.h2}><strong>Notes</strong></h2>
                            <HiArrowDown className={styles.arrowDownImg} />
                        </button>
                    </div>
                    <div className={styles.useCasesContainer}>
                        <button className={styles.arrowDownButton} onClick={() => this.handleClick(styles.arrowDownButton)}>
                            <h2 className={styles.h2}><strong>Use Cases</strong></h2>
                            <HiArrowDown className={styles.arrowDownImg} />
                        </button>
                    </div>
                </div>
            )
        }
    }
}

// Props validation
ScaleInfo.propTypes = {
    scale: PropTypes.string,
    note: PropTypes.string,
    info: PropTypes.object
};

export default ScaleInfo;