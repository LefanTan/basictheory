import React, {Component} from 'react';
import chordStyles from './Chords.module.css'
import buttonStyles from './NoteButtonContainer.module.css'
import StandardButton from './StandardButton';
import NoteButtonContainer from './NoteButtonContainer';
 
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
                <NoteButtonContainer styles={chordStyles} onClick={this.handleNoteButtonClick}/>
                <h1>Major</h1>
                <div className={chordStyles.chordsContainer}>
                    <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}maj`} onClick={this.handleChordButtonClick}/>
                    <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}maj7`} onClick={this.handleChordButtonClick}/>
                    <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}maj9`} onClick={this.handleChordButtonClick}/>
                    <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}maj13`} onClick={this.handleChordButtonClick}/>
                    <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}maj7(#11)`} onClick={this.handleChordButtonClick}/>
                </div>
                <div className={chordStyles.chordsContainer}>
                    <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}7`} onClick={this.handleChordButtonClick}/>
                    <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}9`} onClick={this.handleChordButtonClick}/>
                    <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}11`} onClick={this.handleChordButtonClick}/>
                    <StandardButton className={buttonStyles.chordButton} value={`${this.state.selectedNote}13`} onClick={this.handleChordButtonClick}/>
                </div>
            </div>
        );
    }
}

export default Chords;