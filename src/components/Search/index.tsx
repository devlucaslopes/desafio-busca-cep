import React, { FormEvent, useState } from 'react'

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

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setHasError(false)

    if (!validate(cep)) {
      setHasError(true)
      return
    }

    onSubmit(cep)
  }

  return (
    <form name="search" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Digite seu CEP (apenas números)"
          value={cep}
          onChange={(ev) => setCep(ev.target.value)}
        />
        <button type="submit">Buscar CEP</button>
      </div>
      {hasError && <span>Digite um CEP válido!</span>}
    </form>
  )
}
