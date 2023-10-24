import { useState } from 'react';
import './Index.Modal.css'
import { DescriptionModal } from './Description.Modal';

interface IModal {
    Estado: boolean;
    setOpen: (Estado: boolean) => void;
    title: string
    description: string
}

export function Modal({ Estado, setOpen, title, description }: IModal) {
    
    const [isDescriptionOpen, setDescriptionOpen] = useState(false);

    const botaoAberto = () => {
      setDescriptionOpen(true);
    };
  
    const botaoFechado = () => {
      setDescriptionOpen(false);
    };
    
    
    return (
        <div>
            <h2 className='App2'>{title}</h2>
            <div className='App'>
            <button className='botao' onClick={() => { setOpen(!Estado); botaoAberto(); }}>Abrir Modal</button>
            </div>
            <DescriptionModal
            description={description}
            aberto={isDescriptionOpen}
            fechado={botaoFechado}/>
        </div>
    )
}