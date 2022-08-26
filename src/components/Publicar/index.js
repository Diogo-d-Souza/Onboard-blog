import { useRouter } from "next/router";
import { Publico } from "./style";
export default function Publicar(){
        const router= useRouter(); 
        return(
            <>      
            <Publico>
            <div className="filho2">
                    <div><button className="seta">
                           <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M46.75 24.4375V26.5625C46.75 27.1493 46.2743 27.625 45.6875 27.625H11.3263L20.7825 37.06C20.9836 37.2595 21.0968 37.5311 21.0968 37.8144C21.0968 38.0977 20.9836 38.3692 20.7825 38.5687L19.2738 40.0562C19.0742 40.2574 18.8027 40.3705 18.5194 40.3705C18.2361 40.3705 17.9645 40.2574 17.765 40.0562L4.7175 27.03C4.41853 26.7314 4.25037 26.3263 4.25 25.9037V25.0962C4.2549 24.6746 4.42237 24.2712 4.7175 23.97L17.765 10.9437C17.9645 10.7426 18.2361 10.6295 18.5194 10.6295C18.8027 10.6295 19.0742 10.7426 19.2738 10.9437L20.7825 12.4525C20.9824 12.6483 21.095 12.9164 21.095 13.1962C21.095 13.4761 20.9824 13.7442 20.7825 13.94L11.3263 23.375H45.6875C46.2743 23.375 46.75 23.8507 46.75 24.4375Z" fill="#333333" />
                            </svg>
                        </button>
                        </div>
                   <div className= "main">
                        <div className="corpoartigo">
                            <input placeholder="Titulo do artigo" className="titulo" />
                            <textarea placeholder="Digite seu texto..." className="artigo"/>
                            </div>
                            <div className="botao">
                             <button className="proximo">
                                Publicar
                         </button></div>
                        </div>
                    </div>
                    </Publico>
                </>
                    )
                        }
                    

                   
                