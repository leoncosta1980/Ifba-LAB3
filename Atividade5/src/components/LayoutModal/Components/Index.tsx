import './Index.Modal.css';

interface IModal {
    Estado: boolean;
    setOpen: (Estado: boolean) =>void;
    tytle: string
    description: string
}
export function Modal({ Estado, setOpen, tytle, description }: IModal) {

    if (Estado) {
        return (
            <div className= "background">
                <div className= "modal">
                    <div>
                        <h2>{tytle}</h2>
                        <p>{description}</p>
                        <button className='botao' onClick={() => setOpen(!Estado)}>Fechar</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return <></>;
    }
}
