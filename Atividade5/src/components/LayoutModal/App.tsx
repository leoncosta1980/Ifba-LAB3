import { useState } from 'react'
import { Modal } from './Components/Index';
import './App.css'

function App() {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className='container'>
      <div className='child'>
        <Modal Estado={open} setOpen={setOpen} title={"Titulo do Modal"} description={"Descrição do Modal"} />
      </div>
    </div>
  )
}

export default App;
