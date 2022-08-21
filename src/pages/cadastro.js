import { useRouter } from "next/router";
import styled from "styled-components";
import GlobalStyle from "../styles/globals";

export const Main = styled.main`

    background-color: #ECECEC;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .cadastro-inicial {
        background-color: #D9D9D9;
        width: 83rem;
        height: 63rem;
        border-radius: 8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    h1 {
        font-size: 5rem;
        font-family: 'Inter';
        font-style: normal;
        justify-self: center;
        margin-left: 26.5rem;
    }

    input {
        border-radius: 4rem;
        width: 40rem;
        height: 6rem;
        font-size: 2rem;
        padding-left: 1rem;
        margin-bottom: 2rem;
    }

    .btn1 {
        border-radius: 1.8rem;
        font-size: 2.6rem;
        width: 27.7rem;
        height: 6.6rem;
        background: #1145FF;
        color: white;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    .seta{
        background-color: transparent;
        border: transparent;
        margin-left: 3rem;
    }

    .setacadastro{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

`

export default function Cadastro() {
    const router = useRouter();
    return (
        <>
            <GlobalStyle/>
            <Main>
                <div className="cadastro-inicial">
                    <div className="setacadastro">
                        <button className="seta" onClick= {() => router.push('./login')}>
                            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M46.75 24.4375V26.5625C46.75 27.1493 46.2743 27.625 45.6875 27.625H11.3263L20.7825 37.06C20.9836 37.2595 21.0968 37.5311 21.0968 37.8144C21.0968 38.0977 20.9836 38.3692 20.7825 38.5687L19.2738 40.0562C19.0742 40.2574 18.8027 40.3705 18.5194 40.3705C18.2361 40.3705 17.9645 40.2574 17.765 40.0562L4.7175 27.03C4.41853 26.7314 4.25037 26.3263 4.25 25.9037V25.0962C4.2549 24.6746 4.42237 24.2712 4.7175 23.97L17.765 10.9437C17.9645 10.7426 18.2361 10.6295 18.5194 10.6295C18.8027 10.6295 19.0742 10.7426 19.2738 10.9437L20.7825 12.4525C20.9824 12.6483 21.095 12.9164 21.095 13.1962C21.095 13.4761 20.9824 13.7442 20.7825 13.94L11.3263 23.375H45.6875C46.2743 23.375 46.75 23.8507 46.75 24.4375Z" fill="#333333" />
                            </svg>
                        </button>
                        <h1>Cadastro</h1>
                    </div>
                    <div>
                        <input placeholder="Usuario" />
                        <input placeholder="Email" />
                        <input placeholder="Senha" />
                        <input placeholder="Repetir senha" />
                    </div>
                    <div>
                        <button class="btn1" onClick= {() => router.push('./login')} >Cadastrar</button>
                    </div>
                </div>
            </Main>
        </>
    )
}