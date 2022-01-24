import React from 'react'

import { Search } from './components/Search'
import { Wrapper } from './components/Wrapper'

import './App.scss'

function App() {
  return (
    <main>
      <div className="container">
        <h1>Busca cep</h1>

        <Wrapper>
          <Search onSubmit={() => console.log('oi')} />
        </Wrapper>
      </div>
    </main>
  )
}

export default App
