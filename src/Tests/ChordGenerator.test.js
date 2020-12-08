/* eslint-disable no-undef */
import React from 'react'

import userEvent from '@testing-library/user-event'
import {render, cleanup, screen} from '@testing-library/react'
import ChordGenerator from '../Components/Chords/ChordGenerator'

beforeEach(() => {
    // Hide console.error 
    console.error = jest.fn(() => console.warn("Error log hidden for ChordGenerator test"))
})
afterEach(cleanup)

// Integration tests
describe('Test error catching for Chord Generator', () => {

    it('Test for invalid fret position' , () => {
        var notePositions = [
            {
                "noteNumber": "X",
                "string": 6,
                "fret": -1 // Invalid, expect invalid fret exception
            },
            {
                "noteNumber": "1",
                "string": 5,
                "fret": 1
            },
            {
                "noteNumber": "5",
                "string": 4,
                "fret": 2
            },
            {
                "noteNumber": "1",
                "string": 3,
                "fret": 2
            },
            {
                "noteNumber": "3",
                "string": 2,
                "fret": 2
            },
            {
                "noteNumber": "5",
                "string": 1,
                "fret": 0
            }
        ]

        console.warn = jest.fn(() => {})
        render(<ChordGenerator note='C' noteButtonPositions={notePositions} />)

        // Make sure error was printed to console
        expect(console.warn).toHaveBeenCalled()
    })

    it('Test for invalid string position' , () => {
        // String 0
        var stringZero = [
            {
                "noteNumber": "X",
                "string": 6,
                "fret": 0 
            },
            {
                "noteNumber": "1",
                "string": 0, // Invalid, expect invalid fret exception
                "fret": 0
            },
            {
                "noteNumber": "5",
                "string": 4,
                "fret": 2
            },
            {
                "noteNumber": "1",
                "string": 3,
                "fret": 2
            },
            {
                "noteNumber": "3",
                "string": 2,
                "fret": 2
            },
            {
                "noteNumber": "5",
                "string": 1,
                "fret": 0
            }
        ]

        console.warn = jest.fn(() => {})
        const {rerender} = render(<ChordGenerator note='C' noteButtonPositions={stringZero} />)
        expect(console.warn).toHaveBeenCalled();

        // String 7
        var stringSeven = [
            {
                "noteNumber": "X",
                "string": 6,
                "fret": 0 
            },
            {
                "noteNumber": "1",
                "string": 0, // Invalid, expect invalid fret exception
                "fret": 0
            },
            {
                "noteNumber": "5",
                "string": 4,
                "fret": 2
            },
            {
                "noteNumber": "1",
                "string": 3,
                "fret": 2
            },
            {
                "noteNumber": "3",
                "string": 2,
                "fret": 2
            },
            {
                "noteNumber": "5",
                "string": 1,
                "fret": 0
            }
        ]

        rerender(<ChordGenerator note='C' noteButtonPositions={stringZero} />)
        expect(console.warn).toHaveBeenCalled();
    })

    it('Test for wrong X data' , () => {
        var notePositions = [
            {
                "noteNumber": "X",
                "string": 6,
                "fret": 1 // X should not have a fret of 1
            },
            {
                "noteNumber": "1",
                "string": 6, 
                "fret": 0
            },
            {
                "noteNumber": "5",
                "string": 4,
                "fret": 2
            },
            {
                "noteNumber": "1",
                "string": 3,
                "fret": 2
            },
            {
                "noteNumber": "3",
                "string": 2,
                "fret": 2
            },
            {
                "noteNumber": "5",
                "string": 1,
                "fret": 0
            }
        ]
        
        console.warn = jest.fn(() => {})
        render(<ChordGenerator note='C' noteButtonPositions={notePositions} />)
        expect(console.warn).toHaveBeenCalled()
    })

    it('Test if note prop is null', () =>{
        // valid positions
        var notePosition = [
            {
                "noteNumber": "X",
                "string": 6,
                "fret": 0
            },
            {
                "noteNumber": "1",
                "string": 6, 
                "fret": 0
            },
            {
                "noteNumber": "5",
                "string": 4,
                "fret": 2
            },
            {
                "noteNumber": "1",
                "string": 3,
                "fret": 2
            },
            {
                "noteNumber": "3",
                "string": 2,
                "fret": 2
            },
            {
                "noteNumber": "5",
                "string": 1,
                "fret": 0
            }
        ]

        const {getByTestId} = render(<ChordGenerator noteButtonPositions={notePosition} />)
        expect(getByTestId('fret-number').textContent).toBe("")
    })
})

describe('Test if chord generator generates properly', () => {

    it('Chord generates buttons correctly', () =>{
        // 2 open string, 4 standard
        var notePosition = [
            {
                "noteNumber": "X",
                "string": 6,
                "fret": 0
            },
            {
                "noteNumber": "1",
                "string": 6, 
                "fret": 2
            },
            {
                "noteNumber": "5",
                "string": 4,
                "fret": 0
            },
            {
                "noteNumber": "1",
                "string": 3,
                "fret": 2
            },
            {
                "noteNumber": "3",
                "string": 2,
                "fret": 2
            },
            {
                "noteNumber": "5",
                "string": 1,
                "fret": 2
            }
        ]
        const {queryAllByTestId} = render(<ChordGenerator noteButtonPositions={notePosition}/>)
        expect(queryAllByTestId('open-string-button')).toHaveLength(2)
        expect(queryAllByTestId('standard-button')).toHaveLength(4)
    })

    it('Test button callback', () => {
        const mockButtonHandler = jest.fn((noteNumber) => noteNumber)
        var notePositions = [
            {
                "noteNumber": "X",
                "string": 6,
                "fret": 0
            },
            {
                "noteNumber": "1",
                "string": 6, 
                "fret": 2
            },
            {
                "noteNumber": "5",
                "string": 4,
                "fret": 0
            },
            {
                "noteNumber": "1",
                "string": 3,
                "fret": 2
            },
            {
                "noteNumber": "3",
                "string": 2,
                "fret": 2
            },
            {
                "noteNumber": "5",
                "string": 1,
                "fret": 2
            }
        ]

        const {getAllByTestId} = render(<ChordGenerator onNoteClick={mockButtonHandler} noteButtonPositions={notePositions} />)
        // Click the open note of noteNumber 5 assigned
        userEvent.click(getAllByTestId('open-string-button')[1])
        expect(mockButtonHandler).toHaveBeenCalled();
        expect(mockButtonHandler.mock.results[0].value).toBe("5")
    })
})