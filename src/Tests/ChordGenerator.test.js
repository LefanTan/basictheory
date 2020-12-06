/* eslint-disable no-undef */
import React from 'react'

import userEvent from '@testing-library/user-event'
import {render, cleanup, screen} from '@testing-library/react'
import ErrorBoundary from '../Components/Helpers/ErrorBoundary'
import ChordGenerator from '../Components/Chords/ChordGenerator'

beforeEach(() => {
    // Hide console.error 
    console.error = jest.fn(() => console.warn("Error log hidden for ChordGenerator test"))
})
afterEach(cleanup)

// Integration tests
describe('Test error catching for Chord Generator', () => {

    it('Test for invalid fret position' , () => {
        var stubPosition = [
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
        render(<ChordGenerator note='C' noteButtonPositions={stubPosition} />)

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
        // String 0
        var stubPosition = [
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
        render(<ChordGenerator note='C' noteButtonPositions={stubPosition} />)
        expect(console.warn).toHaveBeenCalled()
    })

    it('Test if note prop is null', () =>{
        // valid positions
        var stubPosition = [
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

        const {getByTestId} = render(<ChordGenerator noteButtonPositions={stubPosition} />)
        expect(getByTestId('fret-number').textContent).toBe("")
    })
})