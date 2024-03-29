/* eslint-disable operator-linebreak */
import './App.css'

import { useState } from 'react'
import { Characters } from './components/Characters'
import axios from 'axios'

function App () {
  const [characters, setCharacters] = useState([])

  const getData = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character')
    setCharacters(response.data.results)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='title'>Rick and Morty</h1>
        {
          characters ?
              (
                <Characters characters={characters} setCharacters={setCharacters} />
              )
            : (
              <>
                <img src='' alt='' />
                <button
                  onClick={getData}
                  className='btn-search'
                >Buscar Personajes
                </button>
              </>
              )
        }
      </header>
    </div>
  )
}

export default App
