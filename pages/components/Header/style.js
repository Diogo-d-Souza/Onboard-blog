import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: black;
    width: 100vw;
    height: 95px;

    h1{
        padding-right: 617.5px;
        color: white;
        font-size: 78px;
        font-family: 'Inter';
        font-style: normal;
    }

    .usuario{
        position: relative;
        bottom: 2px;
        right: 62px;
    }

    input{
        border-radius: 30px;
        padding-left: 10px;
        height: 50px;
        width: 400px;
        font-size: 26px;
    }

    button{
        position: relative;
        right: 60px;
        border: transparent;
        background-color: transparent;
    }

`;

export const Linha_Branca = styled.div`
    background-color: white;
    width: 100vw;
    height: 1px;
`;