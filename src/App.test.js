import React from 'react'
import App from './App';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-test-renderer';

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
});

afterEach(() => {
  // clean up on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null;
})

test('Render app', () => {
  act(() => {
    render(<App />, container)
  })
  expect(container.textContent).toBe('Chords')
})