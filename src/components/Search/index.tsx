import React, { FormEvent, useState } from 'react'

import { formatZipcode, zipcodeOnlyNumbers } from '../../utils/formatter'

import './style.scss'

type SearchType = {
  onSubmit: (cep: string) => void
}

const validate = (value: string): boolean => {
  if (isNaN(parseInt(value))) return false

  if (value.length !== 8) return false

  return true
}

export const Search = ({ onSubmit }: SearchType) => {
  const [zipcode, setZipcode] = useState('')
  const [hasError, setHasError] = useState(false)

  const handleFomarmattedCEP = (value: string) => {
    setZipcode(formatZipcode(value))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setHasError(false)

    const zipcodeFormatted = zipcodeOnlyNumbers(zipcode)

    if (!validate(zipcodeFormatted)) {
      setHasError(true)
      return
    }

    onSubmit(zipcodeFormatted)
  }

  return (
    <form name="search" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Digite seu CEP (apenas números)"
          value={zipcode}
          onChange={(ev) => handleFomarmattedCEP(ev.target.value)}
        />
        <button type="submit">Buscar CEP</button>
      </div>
      {hasError && <span>Digite um CEP válido!</span>}
    </form>
  )
}
