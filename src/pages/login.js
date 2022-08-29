import { useRouter } from "next/router";
import styled from "styled-components";
import GlobalStyle from "../styles/globals";

export const Div = styled.div`
    background-color: #ECECEC;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

    .login-inicial {
        background-color: #D9D9D9;
        width: 83rem;
        height: 63rem;
        border-radius: 8rem;
        display: grid;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 4.4rem;
        font-family: 'Inter';
        font-style: normal;
    }

    input {
        border-radius: 4rem;
        width: 40rem;
        height: 6rem;
        margin-bottom: 2rem;
        padding-left: 1rem;
        font-size: 2rem;
    }

    button {
        border-radius: 1.8rem;
        font-size: 2.6rem;
        width: 27.7rem;
        height: 6.6rem;
        margin-top: 1rem;
        background: #1145FF;
        color: white;
    }

    div {
        display: grid;
        justify-content: center;
    }

`


export default function Login() {
    const router = useRouter();
    return (
        <>
            <GlobalStyle />
            <Div>
                <main className="login-inicial">
                    <div className='login'>
                        <h1>Login</h1>
                    </div>
                    <div>
                        <input placeholder="Usuario" />
                        <input placeholder="Senha" />
                    </div>
                    <div>
                        <button onClick={() => router.push('./home')} >Entrar</button>
                        <button onClick={() => router.push('./cadastro')} >Cadastrar</button>
                    </div>
                </main>
            </Div>

        </>
    )
}