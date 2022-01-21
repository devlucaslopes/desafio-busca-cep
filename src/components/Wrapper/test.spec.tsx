import React from 'react'
import { render, screen } from '@testing-library/react'

import { Wrapper } from '.'

describe('<Wrapper />', () => {
  it('should render correctly', () => {
    render(
      <Wrapper>
        <h1>Lorem Ipsum</h1>
      </Wrapper>
    )

    const component = screen.getByTestId('wrapper')

    expect(component).toBeInTheDocument()
    expect(component).toHaveClass('wrapper')
  })

  it('should render children component', () => {
    render(
      <Wrapper>
        <h1>Lorem Ipsum</h1>
      </Wrapper>
    )

    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
  })
})
