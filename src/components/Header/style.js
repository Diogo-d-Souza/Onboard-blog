import styled from "styled-components";

export const Cabecalho = styled.div`
    .header_sup {
        background-color: #222;
        display: flex;
        height: 8rem;
        width: 100%;
        align-items: center;
        margin-bottom: 0.1rem;
        justify-content: flex-end;
        
        button{
            color: black;
            width: 150px;
            height: 60px;
            text-decoration: none;
            border: none;
            cursor: pointer;
            border-radius: .8em;
            font-size: 1.5em;
            /* font-weight: bold; */
        }
    }

    .header_inf {
        background-color: #222;
        display: flex;
        height: 8rem;
        width: 100%;
        align-items: center;
        justify-content: flex-end;
    }

    h1 {
        position: absolute;
        display: flex;
        justify-content: center;
        color: white;
        font-size: 3.6rem;
        width: 100%;
    }
    
    .botao-login {
        position: relative;
        margin-right: 2.4rem;
    }
    .botao-cadastro {
        position: relative;
        margin-right: 4rem;
    }
    .linha_branca {
        height: 0.1rem;
        width: 100%;
        background-color: white;
    }
    .search {
        display: flex;
        justify-content: end;
        padding-right: 4rem;
        align-items: center;
    }
    .pesquisar {
        width: 40rem;
        height: 4.708rem;
        border-radius: 1.6rem;
        position: absolute;
        padding-left: 1rem;
        font-size: 2rem;
        
    }
    .botao_lupa {
        border: none;
        background-color: transparent;
        margin-right: 1rem;
        position: relative;

    }
`;

// export const Div = styled.div`
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;
//     background-color: black;
//     width: 100vw;
//     height: 95px;

//     .nome{
//         display: flex;
//         justify-content: center;
//     }

//     h1{
//         padding-right: 1700px;
//         color: white;
//         font-size: 78px;
//         font-family: 'Inter';
//         font-style: normal;
//     }

//     .usuario{
//         position: relative;
//         bottom: 2px;
//         right: 62px;
//     }

//     input{
//         border-radius: 30px;
//         padding-left: 10px;
//         height: 50px;
//         width: 400px;
//         font-size: 26px;
//     }

//     button{
//         position: relative;
//         right: 60px;
//         border: transparent;
//         background-color: transparent;
//     }

// `;

// export const Linha_Branca = styled.div`
//     background-color: white;
//     width: 100vw;
//     height: 1px;
// `;