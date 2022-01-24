import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Search } from '.'

const renderSearch = () => {
  const onSubmitSpy = jest.fn()

  const component = render(<Search onSubmit={onSubmitSpy} />)

  return {
    component,
    onSubmitSpy
  }
}

describe('<Search />', () => {
  it('should render correctly', () => {
    renderSearch()

    expect(screen.getByRole('form')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'placeholder',
      'Digite seu CEP (apenas números)'
    )
    expect(
      screen.getByRole('button', { name: /buscar cep/i })
    ).toBeInTheDocument()
  })

  it('should update input value when user typed', async () => {
    renderSearch()

    const input = screen.getByRole('textbox')

    expect(input).toHaveValue('')

    userEvent.type(input, '32110290')

    expect(input).toHaveValue('32110-290')
  })

  it('should calls onSubmit() with correct params when user clicked on button', () => {
    const { onSubmitSpy } = renderSearch()

    const button = screen.getByRole('button', { name: /buscar cep/i })

    userEvent.type(screen.getByRole('textbox'), '32110290')
    userEvent.click(button)

    expect(onSubmitSpy).toHaveBeenCalled()
    expect(onSubmitSpy).toHaveBeenCalledWith('32110290')
  })

  it('should display error message when value is a string', () => {
    const { onSubmitSpy } = renderSearch()

    const button = screen.getByRole('button', { name: /buscar cep/i })

    userEvent.type(screen.getByRole('textbox'), 'lorem ipsum')
    userEvent.click(button)

    expect(onSubmitSpy).not.toHaveBeenCalled()
    expect(screen.getByText('Digite um CEP válido!')).toBeInTheDocument()
  })

  it("shouldn't save strings greather then 9 characters with '-' ", () => {
    renderSearch()

    const button = screen.getByRole('button', { name: /buscar cep/i })

    userEvent.type(screen.getByRole('textbox'), '123456789')
    userEvent.click(button)

    expect(screen.getByRole('textbox')).toHaveValue('12345-678')
  })

  it('should display error message when value.length less then 7 characters', () => {
    const { onSubmitSpy } = renderSearch()

    const button = screen.getByRole('button', { name: /buscar cep/i })

    userEvent.type(screen.getByRole('textbox'), '123456')
    userEvent.click(button)

    expect(onSubmitSpy).not.toHaveBeenCalled()
    expect(screen.getByText('Digite um CEP válido!')).toBeInTheDocument()
  })
})
