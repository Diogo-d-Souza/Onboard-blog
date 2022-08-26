import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    .button_artigo {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #A5A5A5;
        border-radius: 16px;
        margin-left: 5.8rem;
        margin-top: 2.5rem;
        width: 15.4rem;
        height: 4.9rem;
        gap: 1.48rem;
    }

    .p_butao {
        font-size: 1.4rem;
    }

    .artigo_principal {
        display: flex;
        width: 77.7rem;
        height: 21.7rem;
        margin-left: 14.8rem;
        margin-top: 5.6rem;
        border: 0.1rem solid #000000;
        background-color: #FDFDFD;
        border-radius: 1.6rem;
    }

    .img_principal {
        width: 30.7rem;
        height: 21.6rem;
        border-radius: 1.6rem;
    }

    .conteudo {
        display: flex;
        width: 150rem;
        height: 10rem;
        flex-direction: column;
    }

    .titulos_principal {
        display: flex;
        justify-content:space-between;
    }

    .h2_principal {
        margin-right: 10.1rem;
        margin-left: 1.2rem;
        margin-top: 1.8rem;
        margin-bottom: 2.2rem;
        font-size: 2rem;
    }

    .h3_principal {
        margin-right: 4.1rem;
        margin-top: 2.3rem;
        margin-bottom: 2.4rem;
        font-size: 1.4rem;
    }

    .p_principal {
        margin-left: 1.2rem;
        margin-right: 2.1rem;
        font-size: 1.4rem;
    }

    .estrelas {
        display: flex;
        width: 15.3rem;
        height: 2.5rem;
        margin-left: 76.2rem;
        margin-top: 0.7rem;
        justify-content: end;
    }

    .linha_artigos1, .linha_artigos2 {
        display: flex;
    }

    .botao_linha {
        display: flex;
        align-items:flex-end;
        margin-left: 3.2rem;
        border-right: 0.1rem solid black;
    }

    .filtros {
        width: 16.9rem;
        height: 24.7rem;
        margin-top: 4.3rem;
        margin-left: 0.5rem;
    }

    .h2_filtro {
        font-weight: 400;
        font-size: 3.2rem;
    }

    .icone_filtro {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 6rem;
    }

    .main {
        display: flex;
    }

    .ver_mais {
        display: flex;
        width: 9.4rem;
        height: 1.9rem;
        background-color: transparent;
        border: none;
        font-weight: 400;
        font-size: 1.6rem;
        justify-content: center;
    }
`;
export default GlobalStyle;