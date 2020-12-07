/* eslint-disable no-undef */
import React from 'react'

import {render, cleanup, screen} from '@testing-library/react'
import ChordInfo from '../Components/Chords/ChordInfo'

beforeEach(cleanup)

//integration test
describe('Test ChordInfo', () => {
    it('Test notes displayed if correct', () => {
        const info = {
			"FullName": "Minor 7th",
			"Notes": [{
					"num": "1",
					"name": "Root"
				},
				{
					"num": "b3",
					"name": "Minor 3rd"
				},
				{
					"num": "5",
					"name": "Perfect 5th"
				},
				{
					"num": "b7",
					"name": "Minor 7th"
				}
			],
			"Description": "Most commonly used on the II in the major scale or the IV in the minor scale. The Minor 7 adds an impressive amount of depth to the minor triads and can be used to both darken and brighten chord progressions.",
			"Sound": "Slightly dissonant, jazzy, soft, chill, happier/darker than minor triads",
			"Shapes": [
				{
					"Notes": [
						{
							"noteNumber": "1",
							"string": 6,
							"fret": 1
						},
						{
							"noteNumber": "X",
							"string": 5,
							"fret": 0
						},
						{
							"noteNumber": "b7",
							"string": 4,
							"fret": 1
						},
						{
							"noteNumber": "b3",
							"string": 3,
							"fret": 1
						},
						{
							"noteNumber": "5",
							"string": 2,
							"fret": 1
						},
						{
							"noteNumber": "X",
							"string": 1,
							"fret": 0
						}
					]
				},
				{
					"Notes": [{
							"noteNumber": "X",
							"string": 6,
							"fret": 0
						},
						{
							"noteNumber": "1",
							"string": 5,
							"fret": 2
						},
						{
							"noteNumber": "5",
							"string": 4,
							"fret": 4
						},
						{
							"noteNumber": "b7",
							"string": 3,
							"fret": 2
						},
						{
							"noteNumber": "b3",
							"string": 2,
							"fret": 3
						},
						{
							"noteNumber": "X",
							"string": 1,
							"fret": 0
						}
					]
				},
				{
					"Notes": [{
							"noteNumber": "X",
							"string": 6,
							"fret": 0
						},
						{
							"noteNumber": "1",
							"string": 5,
							"fret": 3
						},
						{
							"noteNumber": "b3",
							"string": 4,
							"fret": 1
						},
						{
							"noteNumber": "b7",
							"string": 3,
							"fret": 3
						},
						{
							"noteNumber": "b3",
							"string": 2,
							"fret": 4
						},
						{
							"noteNumber": "X",
							"string": 1,
							"fret": 0
						}
					]
				},
				{
					"Notes": [{
							"noteNumber": "X",
							"string": 6,
							"fret": 0
						},
						{
							"noteNumber": "X",
							"string": 5,
							"fret": 0
						},
						{
							"noteNumber": "1",
							"string": 4,
							"fret": 1
						},
						{
							"noteNumber": "5",
							"string": 3,
							"fret": 3
						},
						{
							"noteNumber": "b7",
							"string": 2,
							"fret": 2
						},
						{
							"noteNumber": "b3",
							"string": 1,
							"fret": 2
						}
					]
				},
				{
					"Notes": [{
							"noteNumber": "X",
							"string": 6,
							"fret": 0
						},
						{
							"noteNumber": "5",
							"string": 5,
							"fret": 3
						},
						{
							"noteNumber": "1",
							"string": 4,
							"fret": 3
						},
						{
							"noteNumber": "b3",
							"string": 3,
							"fret": 1
						},
						{
							"noteNumber": "b7",
							"string": 2,
							"fret": 4
						},
						{
							"noteNumber": "X",
							"string": 1,
							"fret": 0
						}
					]
				},
				{
					"Notes": [
						{
							"noteNumber": "X",
							"string": 6,
							"fret": 0
						},
						{
							"noteNumber": "1",
							"string": 5,
							"fret": 3
						},
						{
							"noteNumber": "b3",
							"string": 4,
							"fret": 1
						},
						{
							"noteNumber": "b7",
							"string": 3,
							"fret": 3
						},
						{
							"noteNumber": "1",
							"string": 2,
							"fret": 1
						},
						{
							"noteNumber": "X",
							"string": 1,
							"fret": 0
						}
					]
				}
			]
		}

        const {rerender, getByText, queryByText} = render(<ChordInfo note='C' chord='min7' info={info} />)

        // Make sure title is correct
        expect(queryByText(/Minor 7th Chord/i)).not.toBeNull()

        // Cmin7 contains the note C - Eb - G - Bb 
        expect(getByText('C')).not.toBeNull()
        expect(getByText(/Eb/i)).not.toBeNull()
        expect(getByText('G')).not.toBeNull()
        expect(getByText(/Bb/i)).not.toBeNull()

        rerender(<ChordInfo note='C#' chord='min7' info={info} />)

        // C#min7 contains the note C# - E - G# - B
        expect(getByText(/C#/i)).not.toBeNull()
        expect(getByText('E')).not.toBeNull()
        expect(getByText(/G#/i)).not.toBeNull()
        expect(getByText('B')).not.toBeNull()
    })
})