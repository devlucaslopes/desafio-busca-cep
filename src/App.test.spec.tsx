import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import App from './App'

describe('<App />', () => {
  let mockAxios: MockAdapter

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
  })

  afterEach(() => {
    mockAxios.reset()
  })

  it('should render search form', () => {
    render(<App />)

    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  fit('should calls axios with zipcode when user submit the search form', () => {
    render(<App />)

    const expectedURL = 'https://viacep.com.br/ws/32110290/json/'

    mockAxios.onGet('https://viacep.com.br/ws/32110290/json/').reply(200)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: /buscar cep/i })

    userEvent.type(input, '32110290')
    userEvent.click(button)

    expect(mockAxios.history.get[0].url).toEqual(expectedURL)
  })
})
