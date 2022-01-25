import React from 'react'
import axios from 'axios'

import { Wrapper } from './components/Wrapper'
import { Search } from './components/Search'
import { Result } from './components/Result'

import './App.scss'

function App() {
  const handleSubmit = async (zipcode: string) => {
    await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`)
  }

  return (
    <main>
      <div className="container">
        <h1>Busca cep</h1>

        <div className="content">
          <Wrapper>
            <Search onSubmit={handleSubmit} />
          </Wrapper>

          <Wrapper>
            <Result
              zipcode="123456"
              state="MG"
              city="Belo Horizonte"
              address="Rua XPTO"
            />
          </Wrapper>
        </div>
      </div>
    </main>
  )
}

export default App
