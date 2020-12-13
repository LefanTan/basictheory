
const notes = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B']
import fetch from 'cross-fetch'

// Example: getNoteBasedOnInterval('C', 'b3') = D#
export function getNoteBasedOnInterval(rootNote, interval){
    // If lenght of root note is 2, it is a sharp or a flat
    const rootIndex = notes.findIndex(n => rootNote.length === 2 ? n.includes(rootNote) : n == rootNote )

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
        case '#5':
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
// Example: getFretNumber (6, 'A') returns 5
export function getFretNumber(string, targetNote){
    var startIndex = 0;
    switch(string){
        case 6 || '6': // Starts from E
            startIndex = notes.findIndex(x => x == 'E')
            break;
        case 5 || '5':
            startIndex = notes.findIndex(x => x == 'A')
            break;
        case 4 || '4':
            startIndex = notes.findIndex(x => x == 'D')
            break;
        case 3 || '3':
            startIndex = notes.findIndex(x => x == 'G')
            break;
        case 2 || '2':
            startIndex = notes.findIndex(x => x == 'B')
            break;
        case 1 || '1':
            startIndex = notes.findIndex(x => x == 'E')
            break;
        default:
            throw new Error("Invalid string number")
    }
    var targetIndex = notes.findIndex(n => targetNote.length === 2 ? n.includes(targetNote) : n == targetNote )

    if(targetIndex < startIndex)
        return 12 - startIndex + targetIndex // 12 because thats the number of item in the notes array
    else
        return targetIndex - startIndex
}

var AudioContext = window.AudioContext // Default
    || window.webkitAudioContext // Safari and old versions of Chrome
    || false; 

if (AudioContext) {
    // Do whatever you want using the Web Audio API
    var context = new AudioContext;
    // ...
} else {
    // Web Audio API is not supported
    // Alert the user
    console.log("Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox");
}

// returns an audio buffer from the url
export function loadSample(url, onSuccess, semitone) {
    if(context == null){
        console.warn('Audio context not available, loadSample will not work')
        return
    }

    context.resume() // resume because safari suspends every audio context created outside an event
    return fetch(url)
    .then(response => response.arrayBuffer())
    .then(buffer => context.decodeAudioData(buffer, audioBuffer => onSuccess(audioBuffer, semitone)))
}

// plays a sound semitone higher
export function playSample(sample, semitone) {
    const source = context.createBufferSource();
    source.buffer = sample;
    source.playbackRate.value = 2 ** (semitone/12)

    const gainNode = context.createGain()
    gainNode.gain.value = 4;
    gainNode.connect(context.destination);
    source.connect(gainNode)
    source.connect(context.destination);
    source.start(0);
}