import React from 'react'
import { render, screen } from '@testing-library/react'

import { Wrapper } from '.'

const renderWrapper = () =>
  render(
    <Wrapper>
      <h1>Lorem Ipsum</h1>
    </Wrapper>
  )

describe('<Wrapper />', () => {
  it('should render correctly', () => {
    renderWrapper()

    const component = screen.getByTestId('wrapper')

    expect(component).toBeInTheDocument()
    expect(component).toHaveClass('wrapper')
    expect(component).toMatchInlineSnapshot(`
      <div
        class="wrapper"
        data-testid="wrapper"
      >
        <h1>
          Lorem Ipsum
        </h1>
      </div>
    `)
  })

  it('should render children component', () => {
    renderWrapper()

    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
  })
})
