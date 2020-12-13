import React, {Component} from 'react';
import ChordInfo from './ChordInfo'
import chordStyles from './ChordsPage.module.css'
import StandardButton from '../StandardButton';
import NoteSelector from '../NoteSelector';
import Sidebar from './Sidebar';
import {db} from '../../Services/Firebase'

// Chord page component
class ChordsPage extends Component{
    constructor(props){
        super(props)
        this.state ={
            selectedNote: 'C',
            selectedChord: 'maj',
            selectedChordInfo: undefined,
            sidebarToggle: true
        }

        this.handleNoteButtonClick = this.handleNoteButtonClick.bind(this)
        this.handleChordButtonClick = this.handleChordButtonClick.bind(this)
    }

    componentDidMount(){
        this.updateChordInfo()
    }

    // Query chord info with the selected chord type and update the state
    updateChordInfo(){
        if(!this.state.selectedChord){
            this.setState({selectedChordInfo: undefined})
            return
        }
        // special case
        var checkForMajorSharp = (this.state.selectedChord == "maj7(#11)") ? "maj7sharp11" : this.state.selectedChord

        const chordTypesRef = db.ref().child('ChordPage').child('ChordTypes')
        const query = chordTypesRef.
                        orderByKey().   
                        equalTo(checkForMajorSharp)

        query.on('value', snap =>{
            this.setState({selectedChordInfo: snap.val() && snap.val()[`${checkForMajorSharp}`]})
        })
    }

    // invoked when note selector button is clicked
    handleNoteButtonClick(value){
        this.setState({
            selectedNote: value
        }) 
    }

    // Invoked when a chord button is clicked
    handleChordButtonClick(value){
        this.setState(prevState => {
            return{
                selectedChord: `${value.substring(this.state.selectedNote.length)}` == prevState.selectedChord ? undefined : `${value.substring(this.state.selectedNote.length)}`,
                sidebarToggle: `${value.substring(this.state.selectedNote.length)}` == this.state.selectedChord ? false : true
            }
        },() => this.updateChordInfo())
    }

    render(){
        return(
            <div className={chordStyles.mainContainer}>
                <div className={chordStyles.header}>
                    <NoteSelector className={chordStyles.noteSelector} styles={chordStyles} selectedNote={this.state.selectedNote} onClick={this.handleNoteButtonClick}/>
                </div>

                <div className={chordStyles.rowContainer}>
                    <Sidebar toggle={this.state.sidebarToggle}><ChordInfo chord={this.state.selectedChord} note={this.state.selectedNote} info={this.state.selectedChordInfo} /></Sidebar>
                    <div className={chordStyles.columnContainer}>
                        <h1 className={chordStyles.h1}>Major</h1>
                        <div className={chordStyles.innerChordRow}>
                            <StandardButton className={"maj" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}maj`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={"maj7" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}maj7`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={"maj9" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}maj9`} onClick={this.handleChordButtonClick}/>
                        </div>
                        <div className={chordStyles.innerChordRow}>
                            <StandardButton className={"maj11" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}maj11`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={"maj13" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}maj13`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={"maj7(#11)" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}maj7(#11)`} onClick={this.handleChordButtonClick}/>
                        </div>
                        <br/>
                        <h1 className={chordStyles.h1}>Dominant</h1>
                        <div className={chordStyles.innerChordRow}>
                            <StandardButton className={"7" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}7`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={"9" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}9`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={"11" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}11`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={"13" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}13`} onClick={this.handleChordButtonClick}/>
                        </div>
                        <br/>
                        <h1 className={chordStyles.h1}>Diminished</h1>
                        <div className={chordStyles.innerChordRow}>
                            <StandardButton className={"dim" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}dim`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={"dim7" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}dim7`} onClick={this.handleChordButtonClick}/>
                        </div>
                    </div>

                    <div className={chordStyles.columnContainer}>
                        <h1 className={chordStyles.h1}>Minor</h1>
                        <div className={chordStyles.innerChordRow}>
                            <StandardButton className={"min" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}min`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={"min7" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}min7`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={"min9" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}min9`} onClick={this.handleChordButtonClick}/>
                        </div>
                        <div className={chordStyles.innerChordRow}>
                            <StandardButton className={"min11" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}min11`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={"min13" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}min13`} onClick={this.handleChordButtonClick}/>
                        </div>
                        <br/>
                        <h1 className={chordStyles.h1}>Suspended</h1>
                        <div className={chordStyles.innerChordRow}>
                            <StandardButton className={"sus2" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}sus2`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={"sus4" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}sus4`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={"7sus4" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}7sus4`} onClick={this.handleChordButtonClick}/>
                        </div>
                        <br/>
                        <h1 className={chordStyles.h1}>Augmented</h1>
                        <div className={chordStyles.innerChordRow}>
                            <StandardButton className={"aug" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}aug`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={"aug7" == this.state.selectedChord ? chordStyles.chordButtonSelected : chordStyles.chordButton} value={`${this.state.selectedNote}aug7`} onClick={this.handleChordButtonClick}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChordsPage;