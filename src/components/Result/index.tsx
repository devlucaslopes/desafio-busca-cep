import React from 'react'

import './style.scss'

type ResultType = {
  zipcode: string
  state: string
  city: string
  address: string
}

export const Result = ({ zipcode, state, city, address }: ResultType) => (
  <ul>
    <li>
      <strong>CEP:</strong>
      <span>{zipcode}</span>
    </li>
    <li>
      <strong>Estado:</strong>
      <span>{state}</span>
    </li>
    <li>
      <strong>Cidade:</strong>
      <span>{city}</span>
    </li>
    <li>
      <strong>Logradouro:</strong>
      <span>{address}</span>
    </li>
  </ul>
)
