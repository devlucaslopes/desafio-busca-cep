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

  it('should update input value when user typed', () => {
    renderSearch()

    const input = screen.getByRole('textbox')

    expect(input).toHaveValue('')

    userEvent.type(input, '32110290')

    expect(input).toHaveValue('32110290')
  })

  it('should calls onSubmit() with correct params when user clicked on button', () => {
    const { onSubmitSpy } = renderSearch()

    const button = screen.getByRole('button', { name: /buscar cep/i })

    userEvent.type(screen.getByRole('textbox'), '32110290')
    userEvent.click(button)

    expect(onSubmitSpy).toHaveBeenCalled()
    expect(onSubmitSpy).toHaveBeenCalledWith('32110290')
  })
})
