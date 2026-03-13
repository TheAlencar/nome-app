import { useState } from 'react'
import './App.css'
import Saudacao from './components/Saudacao'


const logado = 'true'

function App() {

const [nome, setNome] = useState ('Guilherme')

  return (
    <>
      <h1>Meu App React</h1>
      <p className='paragrafo'>Utilizando o vite</p>


      <h3>Olá meu nome é {nome}</h3>

      <h2>Idade: {10+14}</h2>
        
      <Saudacao
        logado={logado}
        />  

        <button onClick={
         () => {
         console.log ('Nome alterado')
         setNome(nome === 'Guilherme' ? 'Guilherme Alencar' : 'Guilherme');  
        }
      }>Mudar o nome com useState</button>
    </>
  )
}

export default App
