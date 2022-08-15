import styled from "styled-components";

export const Header = styled.div`
        width: 136.7rem;
        height: 17.7rem;
        background-color: black;

    h1 {
        color: white;
        margin-top: 3.7rem;
        padding-right: 31.2rem;
        font-size: 3.6rem;
    }

    .header_sup {
        display: flex;
        height: 9.5rem;
        width: 136.7rem;
        align-items: center;
        margin-bottom: 0.1rem;
        justify-content: flex-end;
    }

    .botao_usuario {
        width: 9.5rem;
        height: 6.8rem;
        border-radius: 50% 50%;
        margin-right: 4.2rem;
    }

    h1 {
        margin-right: 9.5rem;
    }

    .linha_branca {
        height: 0.1rem;
        width: 136.7rem;
        background-color: white;
    }

    .header_inf {
        display: flex;
        justify-content: end;
        height: 8rem;
    }

    .pesquisar {
        width: 41.5rem;
        height: 4.708rem;
        margin-top: 1.2rem;
        margin-left: 91rem;
        border-radius: 1.6rem;
        position: absolute;
        
    }

    .botao_lupa {
        border: none;
        background-color: transparent;
        margin-left: 126.8rem;
        margin-top: 1.7rem;
        position: relative;
    }
`;