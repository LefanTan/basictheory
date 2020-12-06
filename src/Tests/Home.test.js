import React from 'react'
import App from '../App'
import Home from '../Components/Home';
import Header from '../Components/Header';
import ChordsPage from '../Components/Chords/ChordsPage'
import {Switch, Route, MemoryRouter} from 'react-router-dom'

import {cleanup, render, fireEvent, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

afterEach(cleanup)

describe('Test Home Page UI', () => {

  describe('Make sure button links to right page', () => {
    it('Chord Button goes to Chord Page', () => {
      const {getByText, getByTestId} = render(
        <MemoryRouter>
          <Switch>
              <Route path='/' exact component={Home}/>
              <Route path={process.env.REACT_APP_CHORDS_PAGE_URL} component={ChordsPage}/>  
          </Switch>
        </MemoryRouter>
      )
      expect(getByText(/Chord/i).textContent).toBe("Chords")
    
      userEvent.click(getByText(/Chord/i))
      expect(getByTestId("note-selector")).not.toBeNull()
    })

    it('Home/Title button goes to Chord Page', () => {
      // Start off at chord page
      const {getByText, queryAllByText, queryByTestId} = render(
        <MemoryRouter initialEntries={[`${process.env.REACT_APP_CHORDS_PAGE_URL}`]} initialIndex={0}> 
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path={process.env.REACT_APP_CHORDS_PAGE_URL} component={ChordsPage} />
          </Switch>
        </MemoryRouter >
      )
      // Make sure chord page is rendered
      expect(queryByTestId("note-selector")).not.toBeNull()

      // Click on header's title button
      userEvent.click(getByText("Basictheory.io"))

      // We should be at home page now, so note-selector should be null
      expect(queryByTestId("note-selector")).toBeNull()
      // There should also be two chord buttons
      expect(queryAllByText(/Chord/i)).toHaveLength(2)
    })
  })
})

