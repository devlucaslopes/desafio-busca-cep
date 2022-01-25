import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should render search form', () => {
    render(<App />)

    expect(screen.getByRole('form')).toBeInTheDocument()
  })
})
