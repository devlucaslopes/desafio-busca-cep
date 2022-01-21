import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Search } from '.'

describe('<Search />', () => {
  it('should render correctly', () => {
    render(<Search />)

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
    render(<Search />)

    const input = screen.getByRole('textbox')

    expect(input).toHaveValue('')

    userEvent.type(input, '32110290')

    expect(input).toHaveValue('32110290')
  })
})
