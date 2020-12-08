/* eslint-disable no-undef */
import React from 'react'

import {cleanup, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NoteSelector from '../Components/Chords/NoteSelector'

afterEach(cleanup)

// Integration tests
it('Test if note selector correctly updates toggled button UI', () => {
    var selectedNote = 'C'
    const onClickMock = jest.fn((val) => {selectedNote = val})
    const {getByText, getByTestId, rerender} = render(<NoteSelector selectedNote={selectedNote} onClick={onClickMock} />)

    var initSharpButtonClassName = getByText('C#').className
    var initButtonClassName = getByText('D').className

    expect(getByTestId('note-selector')).not.toBeNull()

    userEvent.click(getByText('C#'))
    rerender(<NoteSelector selectedNote={selectedNote} onClick={onClickMock} />)

    // C should have the default style and C# should have the selected style
    expect(getByText('C').className).toBe(initButtonClassName)
    expect(getByText('C#').className).not.toBe(initSharpButtonClassName)

    // Make sure onClick event was invoked
    expect(onClickMock).toHaveBeenCalled()
})