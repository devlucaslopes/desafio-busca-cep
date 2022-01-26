import React, { useState } from 'react'
import axios from 'axios'

import { Wrapper } from './components/Wrapper'
import { Search } from './components/Search'
import { Result } from './components/Result'

import './App.scss'

type ResponseSuccessType = {
  cep: string
  localidade: string
  uf: string
  logradouro: string
}

type ResponseErrorType = {
  erro: boolean
}

type ResponseType = ResponseSuccessType | ResponseErrorType

type ResultType = {
  zipcode: string
  state: string
  city: string
  address: string
}

function App() {
  const [hasError, setHasError] = useState(false)
  const [result, setResult] = useState<ResultType | null>(null)

  const resetValues = () => {
    setHasError(false)
    setResult(null)
  }

  const handleSubmit = async (zipcode: string) => {
    resetValues()

    const response = await axios.get<ResponseType>(
      `https://viacep.com.br/ws/${zipcode}/json/`
    )

    if (!response?.data) return

    const { data } = response

    if ('cep' in data) {
      setResult({
        zipcode: data.cep,
        city: data.localidade,
        state: data.uf,
        address: data.logradouro
      })
    } else {
      setHasError(true)
    }
  }

  return (
    <main>
      <div className="container">
        <h1>Busca cep</h1>

        <div className="content">
          <Wrapper>
            <Search onSubmit={handleSubmit} />
          </Wrapper>

          {result && (
            <Wrapper>
              <Result {...result} />
            </Wrapper>
          )}

          {hasError && <Wrapper>CEP não encontrado, tente novamente.</Wrapper>}
        </div>
      </div>
    </main>
  )
}

export default App
