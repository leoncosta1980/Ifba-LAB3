import { useState } from 'react'
import './App.css'
import { Modal } from './Components/Index'

function App() {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <body>
      <div className='App'>
        <h2>Clique no botão para abrir o Modal</h2>
        <button className='botao' onClick={() => setOpen(!open)}>App 1</button>
        <Modal Estado={open} setOpen={setOpen} tytle={"Titulo do Modal"} description={"Descrição do Modal"} />
      </div>
    </body>
  )
}
export default App
