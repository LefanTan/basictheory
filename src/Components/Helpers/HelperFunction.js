
var notes = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B']

export function getNoteBasedOnInterval(rootNote, interval){
    const rootIndex = notes.findIndex(n => n == rootNote)

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
        case '6': // major sixth or major 13th or diminished 7th
        case 'bb7':
        case '13': 
            return notes[(rootIndex + 9) % 12]
        case 'b7': // minor seventh
            return notes[(rootIndex + 10) % 12]
        case '7': // major seventh
            return notes[(rootIndex + 11) % 12]
    }
}

// in standard tuning ofc lol
export function getFretNumber(string, targetNote){
    var startIndex = 0;
    switch(string){
        case 6: // Starts from E
            startIndex = notes.findIndex(x => x == 'E')
            break;
        case 5:
            startIndex = notes.findIndex(x => x == 'A')
            break;
        case 4:
            startIndex = notes.findIndex(x => x == 'D')
            break;
        case 3:
            startIndex = notes.findIndex(x => x == 'G')
            break;
    }
    var targetIndex = notes.findIndex(x => x == targetNote)

    if(targetIndex < startIndex)
        return 12 - startIndex + targetIndex // 12 because thats the number of item in the notes array
    else
        return targetIndex - startIndex
}