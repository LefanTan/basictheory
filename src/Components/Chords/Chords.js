import React, {Component} from 'react';
import styles from './Chords.module.css'
import NoteButtonContainer from './NoteButtonContainer';
 
class Chords extends Component{
    constructor(props){
        super(props)
        this.state ={
            selectedNote: 'C'
        }

        this.handleNoteButtonClick = this.handleNoteButtonClick.bind(this)
    }

    // invoked when note button is clicked
    handleNoteButtonClick(note){
        this.setState( {
            selectedNote: note
        }) 
    }

    render(){
        return(
            <NoteButtonContainer styles={styles} onClick={this.handleNoteButtonClick}/>
        );
    }
}

export default Chords;