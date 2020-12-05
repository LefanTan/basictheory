import React from 'react'
import App from './App';
import ReactDOM from "react-dom";

import {cleanup, fireEvent, render} from '@testing-library/react'

afterEach(cleanup)

it('Text is change when click', () => {
  const {getByText} = render(<App />)
  expect(getByText(/Chords/i).textContent).toBe("Chords")

  fireEvent.click(getByText(/Chords/i))

  expect(getByText(/Major/i).textContent).toBe("Major")
})