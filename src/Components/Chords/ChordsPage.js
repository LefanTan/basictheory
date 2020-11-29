import React, {Component} from 'react';
import ChordInfo from './ChordInfo'
import chordStyles from './ChordsPage.module.css'
import buttonStyles from './NoteSelector.module.css'
import StandardButton from './StandardButton';
import NoteSelector from './NoteSelector';
import Sidebar from './Sidebar';
import data from './chordTypeData.json'
 
// Chord page component
class ChordsPage extends Component{
    constructor(props){
        super(props)
        this.state ={
            selectedNote: 'C',
            selectedChord: `Cmaj`
        }

        this.handleNoteButtonClick = this.handleNoteButtonClick.bind(this)
        this.handleChordButtonClick = this.handleChordButtonClick.bind(this)
    }

    // invoked when note selector button is clicked
    handleNoteButtonClick(value){
        this.setState(prevState => {
            return {
                selectedNote: value,
                
                // Update selected chord that reflects the new note selected
                selectedChord: `${value}${prevState.selectedChord.substring(prevState.selectedNote.length)}`
            }
        }) 

        console.log(this.state)
    }

    // Invoked when a chord button is clicked
    handleChordButtonClick(value){
        this.setState(prevState => {
            return {
                selectedNote: prevState.selectedNote,
                selectedChord: value
            }
        }) 
    }

    render(){
        const selectedGeneralChordTypeInfo = data.find(chordInfo => `${this.state.selectedNote}${chordInfo.ChordType}` == this.state.selectedChord)
        return(
            <div className={chordStyles.mainContainer}>
                <div className={chordStyles.header}>
                    <NoteSelector className={chordStyles.noteSelector} styles={chordStyles} selectedNote={this.state.selectedNote} onClick={this.handleNoteButtonClick}/>
                </div>

                <div className={chordStyles.rowContainer}>
                    <Sidebar><ChordInfo info={selectedGeneralChordTypeInfo} /></Sidebar>
                    <div className={chordStyles.columnContainer}>
                        <h1 className={chordStyles.h1}>Major</h1>
                        <div className={chordStyles.innerChordRow}>
                            <StandardButton className={`${this.state.selectedNote}maj` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}maj`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={`${this.state.selectedNote}maj7` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}maj7`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={`${this.state.selectedNote}maj9` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}maj9`} onClick={this.handleChordButtonClick}/>
                        </div>
                        <div className={chordStyles.innerChordRow}>
                            <StandardButton className={`${this.state.selectedNote}maj11` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}maj11`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={`${this.state.selectedNote}maj13` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}maj13`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={`${this.state.selectedNote}maj7(#11)` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}maj7(#11)`} onClick={this.handleChordButtonClick}/>
                        </div>
                        <br/>
                        <h1 className={chordStyles.h1}>Dominant</h1>
                        <div className={chordStyles.innerChordRow}>
                            <StandardButton className={`${this.state.selectedNote}7` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}7`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={`${this.state.selectedNote}9` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}9`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={`${this.state.selectedNote}11` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}11`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={`${this.state.selectedNote}13` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}13`} onClick={this.handleChordButtonClick}/>
                        </div>
                        <br/>
                        <h1 className={chordStyles.h1}>Diminished</h1>
                        <div className={chordStyles.innerChordRow}>
                            <StandardButton className={`${this.state.selectedNote}dim` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}dim`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={`${this.state.selectedNote}dim7` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}dim7`} onClick={this.handleChordButtonClick}/>
                        </div>
                    </div>

                    <div className={chordStyles.columnContainer}>
                        <h1 className={chordStyles.h1}>Minor</h1>
                        <div className={chordStyles.innerChordRow}>
                            <StandardButton className={`${this.state.selectedNote}min` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}min`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={`${this.state.selectedNote}min7` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}min7`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={`${this.state.selectedNote}min9` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}min9`} onClick={this.handleChordButtonClick}/>
                        </div>
                        <div className={chordStyles.innerChordRow}>
                            <StandardButton className={`${this.state.selectedNote}min11` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}min11`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={`${this.state.selectedNote}min13` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}min13`} onClick={this.handleChordButtonClick}/>
                        </div>
                        <br/>
                        <h1 className={chordStyles.h1}>Suspended</h1>
                        <div className={chordStyles.innerChordRow}>
                            <StandardButton className={`${this.state.selectedNote}sus2` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}sus2`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={`${this.state.selectedNote}sus4` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}sus4`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={`${this.state.selectedNote}7sus2` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}7sus2`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={`${this.state.selectedNote}7sus4` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}7sus4`} onClick={this.handleChordButtonClick}/>
                        </div>
                        <div className={chordStyles.innerChordRow}>
                            <StandardButton className={`${this.state.selectedNote}9sus2` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}9sus2`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={`${this.state.selectedNote}9sus4` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}9sus4`} onClick={this.handleChordButtonClick}/>
                        </div>
                        <br/>
                        <h1 className={chordStyles.h1}>Augmented</h1>
                        <div className={chordStyles.innerChordRow}>
                            <StandardButton className={`${this.state.selectedNote}aug` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}aug`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={`${this.state.selectedNote}aug6` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}aug6`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={`${this.state.selectedNote}aug7` == this.state.selectedChord ? buttonStyles.chordButtonSelected : buttonStyles.chordButton} value={`${this.state.selectedNote}aug7`} onClick={this.handleChordButtonClick}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChordsPage;