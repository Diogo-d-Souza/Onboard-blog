import { useRouter } from "next/router";
import { Publico } from "./style";


export default function Publicar(){
    const router= useRouter(); 
    return(
        <>
            <Publico>
                <div className="filho2">
                    <div>
                        <button className="seta" onClick={() => router.push('../../home')}>
                            <svg width="43" height="31" viewBox="0 0 43 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.75 14.4374V16.5624C42.75 17.1492 42.2743 17.6249 
                                41.6875 17.6249H7.32625L16.7825 27.0599C16.9836 27.2594 17.0968 
                                27.531 17.0968 27.8143C17.0968 28.0976 16.9836 28.3692 16.7825 
                                28.5687L15.2738 30.0562C15.0742 30.2573 14.8027 30.3705 14.5194 
                                30.3705C14.2361 30.3705 13.9645 30.2573 13.765 30.0562L0.7175 
                                17.0299C0.418529 16.7313 0.250372 16.3262 0.25 15.9037V15.0962C0.254896 
                                14.6746 0.422372 14.2711 0.7175 13.9699L13.765 0.94368C13.9645 
                                0.742536 14.2361 0.629395 14.5194 0.629395C14.8027 0.629395 15.0742 
                                0.742536 15.2738 0.94368L16.7825 2.45243C16.9824 2.64828 17.095 2.91634 
                                17.095 3.19618C17.095 3.47602 16.9824 3.74408 16.7825 3.93993L7.32625 
                                13.3749H41.6875C42.2743 13.3749 42.75 13.8506 42.75 14.4374Z" fill="#333333"/>
                            </svg>

                        </button>
                    </div>
                    <div className= "main">

                            <div className="corpoartigo">
                                <input placeholder="Titulo do artigo" className="titulo" />
                                <textarea placeholder="Digite seu texto..." className="artigo"/>
                            </div>

                            <div className="botao">
                                <button className="proximo">Publicar</button>
                            </div>
                    </div>
                </div>
            </Publico>
        </>
    );
}