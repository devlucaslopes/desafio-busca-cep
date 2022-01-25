import React from 'react'

import { Wrapper } from './components/Wrapper'
import { Search } from './components/Search'
import { Result } from './components/Result'

import './App.scss'

function App() {
  return (
    <main>
      <div className="container">
        <h1>Busca cep</h1>

        <Wrapper>
          <Search onSubmit={() => console.log('oi')} />
        </Wrapper>

        <Wrapper>
          <Result />
        </Wrapper>
      </div>
    </main>
  )
}

export default App
