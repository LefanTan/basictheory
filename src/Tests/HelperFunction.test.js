import '../Components/Helpers/HelperFunction'
import { getFretNumber, getNoteBasedOnInterval } from '../Components/Helpers/HelperFunction'

/// Unit test

it('Test if getNoteBasedOnInterval works', () => {
    expect(getNoteBasedOnInterval('C#', '1')).toMatch(/C#/i)
    expect(getNoteBasedOnInterval('C#', 'b2')).toMatch(/^D$/i)
    expect(getNoteBasedOnInterval('C#', '2')).toMatch(/D#/i)
    expect(getNoteBasedOnInterval('C#', 'b3')).toMatch(/^E$/i)
    expect(getNoteBasedOnInterval('C#', '3')).toMatch(/^F$/i)
    expect(getNoteBasedOnInterval('C#', '4')).toMatch(/F#/i)
    expect(getNoteBasedOnInterval('C#', 'b5')).toMatch(/^G$/i)
    expect(getNoteBasedOnInterval('C#', '5')).toMatch(/G#/i)
    expect(getNoteBasedOnInterval('C#', 'b6')).toMatch(/^A$/i)
    expect(getNoteBasedOnInterval('C#', '6')).toMatch(/A#/i)
    expect(getNoteBasedOnInterval('C#', 'bb7')).toMatch(/A#/i)
    expect(getNoteBasedOnInterval('C#', 'b7')).toMatch(/^B$/i)
    expect(getNoteBasedOnInterval('C#', '7')).toMatch(/^C$/i)
    expect(getNoteBasedOnInterval('C#', '8')).toMatch(/C#/i)
    expect(getNoteBasedOnInterval('C#', '9')).toMatch(/D#/i)
    expect(getNoteBasedOnInterval('C#', '11')).toMatch(/F#/i)
    expect(getNoteBasedOnInterval('C#', '13')).toMatch(/A#/i)

    expect(getNoteBasedOnInterval('B', '1')).toMatch(/^B$/i)
    expect(getNoteBasedOnInterval('B', 'b2')).toMatch(/^C$/i)
    expect(getNoteBasedOnInterval('B', '2')).toMatch(/C#/i)
    expect(getNoteBasedOnInterval('B', 'b3')).toMatch(/^D$/i)
    expect(getNoteBasedOnInterval('B', '3')).toMatch(/D#/i)
    expect(getNoteBasedOnInterval('B', '4')).toMatch(/^E$/i)
    expect(getNoteBasedOnInterval('B', 'b5')).toMatch(/^F$/i)
    expect(getNoteBasedOnInterval('B', '5')).toMatch(/F#/i)
    expect(getNoteBasedOnInterval('B', 'b6')).toMatch(/^G$/i)
    expect(getNoteBasedOnInterval('B', '6')).toMatch(/G#/i)
    expect(getNoteBasedOnInterval('B', 'bb7')).toMatch(/G#/i)
    expect(getNoteBasedOnInterval('B', 'b7')).toMatch(/^A$/i)
    expect(getNoteBasedOnInterval('B', '7')).toMatch(/A#/i)
    expect(getNoteBasedOnInterval('B', '8')).toMatch(/^B$/i)
    expect(getNoteBasedOnInterval('B', '9')).toMatch(/C#/i)
    expect(getNoteBasedOnInterval('B', '11')).toMatch(/^E$/i)
    expect(getNoteBasedOnInterval('B', '13')).toMatch(/G#/i)
})

it('Test if getFretNumber works', () => {
    expect(getFretNumber(6, 'C')).toBe(8)
    expect(getFretNumber(6, 'D#')).toBe(11)
    expect(getFretNumber(6, 'Eb')).toBe(11)

    expect(getFretNumber(5, 'D')).toBe(5)
    expect(getFretNumber(5, 'Eb')).toBe(6)
    expect(getFretNumber(5, 'Ab')).toBe(11)

    expect(getFretNumber(4, 'D')).toBe(0)
    expect(getFretNumber(4, 'G')).toBe(5)
    expect(getFretNumber(4, 'Eb')).toBe(1)

    expect(getFretNumber(3, 'G')).toBe(0)
    expect(getFretNumber(3, 'D')).toBe(7)
    expect(getFretNumber(3, 'Ab')).toBe(1)

    expect(getFretNumber(2, 'B')).toBe(0)
    expect(getFretNumber(2, 'Bb')).toBe(11)
    expect(getFretNumber(2, 'D#')).toBe(4)

    expect(getFretNumber(1, 'C')).toBe(8)
    expect(getFretNumber(1, 'D#')).toBe(11)
    expect(getFretNumber(1, 'Eb')).toBe(11)
})

//TODO: Test Audio Context functions
