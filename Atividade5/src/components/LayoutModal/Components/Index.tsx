import { useState } from 'react';
import {StyledApp2, Styledbotao} from './Index.Modal.ts'
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
            <StyledApp2>{title}</StyledApp2>
            <StyledApp2>
            <Styledbotao onClick={() => { setOpen(!Estado); botaoAberto(); }}>Abrir Modal</Styledbotao>
            </StyledApp2>
            <DescriptionModal
            description={description}
            aberto={isDescriptionOpen}
            fechado={botaoFechado}/>
        </div>
    )
}