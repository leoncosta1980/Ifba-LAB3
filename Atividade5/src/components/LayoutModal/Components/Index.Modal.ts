import styled from "styled-components"

export const StyledApp2 = styled.div`
    position: absolute;
    top: 15%;
    left: 30%;
    margin: -25px 0 0 -25px;
`;
export const Styledmodal =  styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    height: 25%;
    transform: translate(-50%, -50%);
    background-color: rgb(9, 100, 237);
    color: black;
    padding: 4rem;
    border-radius: 15px;
    `

export const Styledbotao = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: +30px 0 0 +10px;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 1rem;
    place-items: center;
    border-radius: 1rem;
    transition: all 0.6s ease-in-out 0s;
    box-shadow: inset 0 0 20px #000;
    max-width: 400px;
`