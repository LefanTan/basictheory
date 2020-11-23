import React, {Component} from 'react';
import chordStyles from './Chords.module.css'
import buttonStyles from './NoteButtonContainer.module.css'
import StandardButton from './StandardButton';
import NoteSelector from './NoteSelector';
 
class Chords extends Component{
    constructor(props){
        super(props)
        this.state ={
            selectedNote: 'C',
            selectedChord: ""
        }

        this.handleNoteButtonClick = this.handleNoteButtonClick.bind(this)
        this.handleChordButtonClick = this.handleChordButtonClick.bind(this)
    }

    // invoked when note button is clicked
    handleNoteButtonClick(value){
        this.setState(prevState => {
            return {
                selectedNote: value,
                selectedChord: prevState.selectedChord
            }
        }) 
    }

    handleChordButtonClick(value){
        this.setState(prevState => {
            return {
                selectedNote: prevState.selectedNote,
                selectedChord: value
            }
        }) 
    }

    render(){
        return(
            <div className={chordStyles.mainContainer}>
                <NoteSelector styles={chordStyles} onClick={this.handleNoteButtonClick}/>

                <div className={chordStyles.rowContainer}>
                    <div className={chordStyles.columnContainer}>
                        <h1>Major</h1>
                        <div className={chordStyles.rowContainer}>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}maj`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}maj7`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}maj9`} onClick={this.handleChordButtonClick}/>
                        </div>
                        <div className={chordStyles.rowContainer}>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}maj11`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}maj13`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}maj7(#11)`} onClick={this.handleChordButtonClick}/>
                        </div>
                    </div>
                    
                    <br/>
                    <div className={chordStyles.columnContainer}>
                        <h1>Minor</h1>
                        <div className={chordStyles.rowContainer}>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}min`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}min7`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}min9`} onClick={this.handleChordButtonClick}/>
                        </div>
                        <div className={chordStyles.rowContainer}>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}min11`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}min13`} onClick={this.handleChordButtonClick}/>
                        </div>
                    </div>
                </div>

                <div className={chordStyles.rowContainer}>
                    <div className={chordStyles.columnContainer}>
                        <h1>Dominant</h1>
                        <div className={chordStyles.rowContainer}>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}7`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}9`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}11`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}13`} onClick={this.handleChordButtonClick}/>
                        </div>
                    </div>
                    
                    <br/>
                    <div className={chordStyles.columnContainer}>
                        <h1>Suspended</h1>
                        <div className={chordStyles.rowContainer}>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}sus2`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}sus4`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}7sus2`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}7sus4`} onClick={this.handleChordButtonClick}/>
                        </div>
                        <div className={chordStyles.rowContainer}>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}9sus2`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}9sus4`} onClick={this.handleChordButtonClick}/>
                        </div>
                    </div>
                </div>

                <div className={chordStyles.rowContainer}>
                    <div className={chordStyles.columnContainer}>
                        <h1>Diminished</h1>
                        <div className={chordStyles.rowContainer}>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}dim`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}dim7`} onClick={this.handleChordButtonClick}/>
                        </div>
                    </div>
                    
                    <br/>
                    <div className={chordStyles.columnContainer}>
                        <h1>Augmented</h1>
                        <div className={chordStyles.rowContainer}>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}aug`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}aug6`} onClick={this.handleChordButtonClick}/>
                            <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}aug7`} onClick={this.handleChordButtonClick}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Chords;