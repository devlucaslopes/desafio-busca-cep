import React, { useState } from 'react'
import axios from 'axios'

import { Wrapper } from './components/Wrapper'
import { Search } from './components/Search'
import { Result } from './components/Result'

import './App.scss'

type ResultType = {
  zipcode: string
  state: string
  city: string
  address: string
}

function App() {
  const [result, setResult] = useState<ResultType | null>(null)

  const handleSubmit = async (zipcode: string) => {
    const response = await axios.get(
      `https://viacep.com.br/ws/${zipcode}/json/`
    )

    if (!response?.data) return

    const { data } = response

    setResult({
      zipcode: data.cep,
      city: data.localidade,
      state: data.uf,
      address: data.logradouro
    })
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
        </div>
      </div>
    </main>
  )
}

export default App
