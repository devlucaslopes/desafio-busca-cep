import React, { useState } from 'react'

type SearchType = {
  onSubmit: (cep: string) => void
}

export const Search = ({ onSubmit }: SearchType) => {
  const [cep, setCep] = useState('')

  const handleSubmit = () => {
    onSubmit(cep)
  }

  return (
    <form name="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite seu CEP (apenas números)"
        value={cep}
        onChange={(ev) => setCep(ev.target.value)}
      />
      <button type="submit">Buscar CEP</button>
    </form>
  )
}
