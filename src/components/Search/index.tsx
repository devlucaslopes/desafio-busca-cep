import React, { FormEvent, useState } from 'react'

import './style.scss'

type SearchType = {
  onSubmit: (cep: string) => void
}

export const Search = ({ onSubmit }: SearchType) => {
  const [cep, setCep] = useState('')
  const [hasError, setHasError] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setHasError(false)

    if (isNaN(parseInt(cep))) {
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
      {hasError && <span>CEP inválido, digite apenas números.</span>}
    </form>
  )
}
