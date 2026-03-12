import './App.css'
import Saudacao from './components/Saudacao'

const nome = 'Guilherme'

const logado = 'true'

function App() {


  return (
    <>
      <h1>Meu App React</h1>
      <p className='paragrafo' color='blue'>Utilizando o vite</p>


      <h3>Olá meu nome é {nome}</h3>

      <h2>Idade: {10+14}</h2>
        
      <Saudacao
        logado={logado} />
    </>
  )
}

export default App
