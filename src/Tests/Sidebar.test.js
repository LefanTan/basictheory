import React from 'react'

import {cleanup, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Sidebar from '../Components/Chords/Sidebar'

beforeEach(cleanup)

it('Test if sidebar toggles', () => {
    const {rerender, queryByTestId} = render(<Sidebar toggle={false} ><h1>Test</h1></Sidebar>)
    // get initial class name when side bar is hidden
    var inactiveClassName = queryByTestId('sidebar').className

    rerender(<Sidebar toggle={true} ><h1>Test</h1></Sidebar>)
    // Side bar is active now, class name should be different too
    expect(queryByTestId('sidebar')).not.toBe(inactiveClassName)
})