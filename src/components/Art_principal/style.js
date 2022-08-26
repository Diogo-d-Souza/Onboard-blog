import styled from "styled-components";

export const Div = styled.div`
    flex:1;
    padding-bottom: 140px;
`

export const Aside = styled.aside`
    min-height: 100vh;
    width: 280px;
    border-left: 1px solid black;
    padding-top: 44px;
    padding-left: 20px;
`

export const Aside2 = styled.aside`
    display: flex;
    width: 800px;
    height: 110px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
    background-color: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    .titulo{
        font-size: 30px;
    }
`

export const Main = styled.main`
    display:flex;
    background-color: #cccc;
`

export const Div2 = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`

export const DivCentroTexto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 10px;

    .texto{
        text-align: justify;
    }
`

export const Retangulo = styled.div`
    background-color: white;
    width: 800px;
    height: 1400px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-bottom: 20px;

    .estrela{
        display: flex;
        justify-content: end;
        padding-right: 20px;
        padding-top: 10px;
    }

    .divtema{
        padding-left: 20px;
        padding-bottom: 50px;
    }

    .foto{
        display: flex;
        justify-content: center;
        padding-bottom: 50px;
    }

`
export const Seta_area = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 40px;
    padding-bottom: 50px;

    .back{
        border: transparent;
        background-color: transparent;
    }
`

export const Comentarios = styled.div`

.comentar{
        border-radius: 30px;
        height: 50px;
        width: 800px;
        font-size: 26px;
        padding-left: 20px;
    }

    .publicar{
        display: flex;
        justify-content: end;
        padding-top: 20px;
    }

    button{
        width: 80px;
        height: 40px;
        border-radius: 20px;
        background-color: #222;
        color: white;
    }
`