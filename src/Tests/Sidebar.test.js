import React from 'react'

import {cleanup, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Sidebar from '../Components/Chords/Sidebar'

it('Test if sidebar toggles', () => {
    const {rerender, queryByTestId} = render(<Sidebar toggle={false} ><h1>Test</h1></Sidebar>)
    
    expect(queryByTestId('sidebar')).toBeNull()
})