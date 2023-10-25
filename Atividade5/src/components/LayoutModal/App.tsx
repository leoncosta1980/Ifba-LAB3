import { useState } from 'react'
import { Modal } from './Components/Index';
import {StyledContainer, StyledChild } from './Components/App.style'
//*import './App.css'

function App() {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <StyledContainer>
      <StyledChild>
        <Modal Estado={open} setOpen={setOpen} title={"Titulo do Modal"} description={"Descrição do Modal"} />
      </StyledChild>
    </StyledContainer>
  )
}

export default App;
