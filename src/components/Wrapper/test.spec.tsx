import React from 'react'
import { render, screen } from '@testing-library/react'

import { Wrapper } from '.'

describe('<Wrapper />', () => {
  it('should render correctly', () => {
    render(<Wrapper />)

    const component = screen.getByTestId('wrapper')

    expect(component).toBeInTheDocument()
    expect(component).toHaveClass('wrapper')
  })
})
