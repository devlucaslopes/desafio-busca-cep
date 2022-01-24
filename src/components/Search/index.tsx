import React, { FormEvent, useState } from 'react'

import { cepOnlyNumbers, formatCEP } from '../../utils/formatter'

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
  const [cep, setCep] = useState('')
  const [hasError, setHasError] = useState(false)

  const handleFomarmattedCEP = (value: string) => {
    setCep(formatCEP(value))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setHasError(false)

    const cepFormatted = cepOnlyNumbers(cep)

    if (!validate(cepFormatted)) {
      setHasError(true)
      return
    }

    onSubmit(cepFormatted)
  }

  return (
    <form name="search" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Digite seu CEP (apenas números)"
          value={cep}
          onChange={(ev) => handleFomarmattedCEP(ev.target.value)}
        />
        <button type="submit">Buscar CEP</button>
      </div>
      {hasError && <span>Digite um CEP válido!</span>}
    </form>
  )
}
