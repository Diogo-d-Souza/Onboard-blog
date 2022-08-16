import styled from "styled-components";

export const Header = styled.div`
        width: 100%;
        height: 17.7rem;
        background-color: black;

    .header_sup {
        display: flex;
        height: 9.5rem;
        width: 100%;
        align-items: center;
        margin-bottom: 0.1rem;
        justify-content: flex-end;
    }

    h1 {
        display: flex;
        justify-content: center;
        color: white;
        font-size: 3.6rem;
        width: 100%;
    }
    
    .botao-login {
        width: 84px;
        height: 36px;
        margin-right: 2.4rem;
    }

    .botao-cadastro {
        width: 84px;
        height: 36px;
        margin-right: 4rem;
    }

    .linha_branca {
        height: 0.1rem;
        width: 100%;
        background-color: white;
    }

    .header_inf {
        display: flex;
        height: 8rem;
        width: 100%;
    }

    .search {
        display: flex;
        justify-content: end;
        margin-right: 4.2rem;
    }

    .pesquisar {
        width: 41.5rem;
        height: 4.708rem;
        margin-top: 1.2rem;
        border-radius: 1.6rem;
        position: absolute;
        
    }

    .botao_lupa {
        border: none;
        background-color: transparent;
        margin-top: 1.7rem;
        margin-right: 1rem;
        position: relative;
    }
`;