import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'

import App from './App'

jest.mock('axios')

describe('<App />', () => {
  it('should render search form', () => {
    render(<App />)

    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  fit('should calls axios with zipcode when user submit the search form', () => {
    render(<App />)

    const expectedURL = 'https://viacep.com.br/ws/32110290/json/'

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: /buscar cep/i })

    userEvent.type(input, '32110290')
    userEvent.click(button)

    expect(axios.get).toHaveBeenCalled()
    expect(axios.get).toHaveBeenCalledWith(expectedURL)
  })
})
