import React from 'react'
import { render, screen } from '@testing-library/react'

import { Result } from '.'

describe('<Result />', () => {
  it('should make snapshot', () => {
    const { container } = render(
      <Result
        zipcode="123456"
        state="MG"
        city="Belo Horizonte"
        address="Rua XPTO"
      />
    )

    expect(container).toMatchSnapshot()
  })

  it('should render correctly', () => {
    render(
      <Result
        zipcode="123456"
        state="MG"
        city="Belo Horizonte"
        address="Rua XPTO"
      />
    )

    expect(screen.getByText(/123456/i)).toBeInTheDocument()
    expect(screen.getByText(/mg/i)).toBeInTheDocument()
    expect(screen.getByText(/belo horizonte/i)).toBeInTheDocument()
    expect(screen.getByText(/rua xpto/i)).toBeInTheDocument()
  })
})
