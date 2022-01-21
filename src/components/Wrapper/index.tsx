import React from 'react'

import './style.scss'

type WrapperType = {
  children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperType) => (
  <div className="wrapper" data-testid="wrapper">
    {children}
  </div>
)
