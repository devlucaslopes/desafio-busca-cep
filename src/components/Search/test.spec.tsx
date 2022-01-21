import React from 'react'
import { render, screen } from '@testing-library/react'

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
})
