
import './App.css'
import CardCookie from './components/CardCookie'
import phrases from './data/phrases.json'

function App() {
  

  return (
    <>
      <div className="cont-titulo">
      <h1 className='titulo'>Galleta de la fortuna</h1>
      </div>
     
      <CardCookie data = {phrases} />
        
      </>
  )
}

export default App
