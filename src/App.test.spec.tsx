import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'

import ZIPCODE_DATA from './mocks/zipcode.json'

import App from './App'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('<App />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render search form', () => {
    render(<App />)

    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('should calls axios with zipcode when user submit the search form', () => {
    const expectedURL = 'https://viacep.com.br/ws/32110290/json/'

    render(<App />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: /buscar cep/i })

    userEvent.type(input, '32110290')
    userEvent.click(button)

    expect(mockedAxios.get).toHaveBeenCalledWith(expectedURL)
  })

  it('should show result component when request succeed', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: ZIPCODE_DATA })

    render(<App />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: /buscar cep/i })

    userEvent.type(input, '32110290')
    userEvent.click(button)

    await waitFor(() => {
      expect(screen.getByText('32110-290')).toBeInTheDocument()
      expect(screen.getByText('MG')).toBeInTheDocument()
      expect(screen.getByText('Contagem')).toBeInTheDocument()
      expect(screen.getByText('Praça São Pedro')).toBeInTheDocument()
    })
  })

  it('should show error message when request failed', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { erro: true } })

    render(<App />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: /buscar cep/i })

    userEvent.type(input, '32110290')
    userEvent.click(button)

    await waitFor(() => {
      expect(screen.queryByRole('list')).not.toBeInTheDocument()
      expect(
        screen.getByText('CEP não encontrado, tente novamente.')
      ).toBeInTheDocument()
    })
  })
})
