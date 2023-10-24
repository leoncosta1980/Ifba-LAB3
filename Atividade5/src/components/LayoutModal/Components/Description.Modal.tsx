import './Index.Modal.css'
interface IDescriptionModal {
    description: string;
    aberto: boolean;
    fechado: () => void;
}

export function DescriptionModal({ description, aberto, fechado }: IDescriptionModal) {
    if (!aberto) {
        return null;
    }
    return (
        <div className="App2">
            <div className="modal">
                <h2>Descrição do Modal</h2>
                <p>{description}</p>
                <button onClick={fechado}>Fechar Modal</button>
            </div>
        </div>
    );
}