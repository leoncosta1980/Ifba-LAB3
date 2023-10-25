import {StyledApp2, Styledmodal} from './Index.Modal'
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
        <StyledApp2>
            <Styledmodal>
                <h2>Descrição do Modal</h2>
                <p>{description}</p>
                <button onClick={fechado}>Fechar Modal</button>
            </Styledmodal>
        </StyledApp2>
    );
}