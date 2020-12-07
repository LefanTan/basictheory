import React from 'react'

import ChordsPage from '../Components/Chords/ChordsPage'
import {cleanup, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {db} from '../Services/Firebase'

beforeEach(cleanup)

// Unable to mock firebase realtime database
it('Test if clicking chords changes chordInfo', () => {
    // jest.mock('../Services/Firebase', () => {
    //     const firebaseMock = require('firebase-mock')
    //     const db = new firebaseMock.MockFirebase() 
    //     db.autoFlush()   
    //     return {db}
    // })
    // db.ref().child('ChordTypes/maj').set({
    //     FullName: "Major"
    // })
    // const reff=db.ref().child('ChordTypes')

    // const query = reff.
    // orderByKey().   
    // equalTo('maj')

    // query.on('value', snap => console.log(snap))
    
    // const {rerender, getByTestId} = render(<ChordsPage />)
})