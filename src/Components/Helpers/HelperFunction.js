function GetNoteBasedOnInterval(rootNote, interval){
    var notes = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B']
    var rootIndex = notes.findIndex(n => n == rootNote)

    switch(interval){
        case '1': // root note
        case '8':
            return rootNote
        case 'b2': // minor second
            return notes[(rootIndex + 1) % 12]
        case '2': // major second
        case '9':
            return notes[(rootIndex + 2) % 12]
        case 'b3': // minor third
            return notes[(rootIndex + 3) % 12]
        case '3': // major third
            return notes[(rootIndex + 4) % 12]
        case '4': // perfect forth
        case '11':
            return notes[(rootIndex + 5) % 12]
        case 'b5': // diminished fifth or augmented forth
        case '#11':
            return notes[(rootIndex + 6) % 12]
        case '5': // perfect fifth
            return notes[(rootIndex + 7) % 12]
        case 'b6': // minor sixth
            return notes[(rootIndex + 8) % 12]
        case '6': // major sixth
        case '13': 
            return notes[(rootIndex + 9) % 12]
        case 'b7': // minor seventh
            return notes[(rootIndex + 10) % 12]
        case '7': // major seventh
            return notes[(rootIndex + 11) % 12]
    }
}

export default GetNoteBasedOnInterval;