import GlobalStyle from "../styles/globals";
import Artigos from "./components/Artigos";
import Filtros from "./components/Filtros";
import Cabecalho from "./components/Cabecalho";


export default function Home (){ 
  return (
    <>
      <GlobalStyle/>
      
        <Cabecalho></Cabecalho>
            <main>
            <div class="tela-conteudo">
                <button class="button-artigo">
                    <svg width="31" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.3246 15.0043C29.9079 15.0043 29.5083 15.1623 29.2137 15.4436C28.9191 15.7248 28.7536 16.1062 28.7536 16.5039V25.5013C28.7536 25.899 28.5881 26.2804 28.2935 26.5617C27.9989 26.8429 27.5993 27.0009 27.1826 27.0009H5.18899C4.77235 27.0009 4.37276 26.8429 4.07815 26.5617C3.78353 26.2804 3.61802 25.899 3.61802 25.5013V4.50739C3.61802 4.10968 3.78353 3.72826 4.07815 3.44704C4.37276 3.16582 4.77235 3.00783 5.18899 3.00783H14.6148C15.0315 3.00783 15.4311 2.84984 15.7257 2.56861C16.0203 2.28739 16.1858 1.90597 16.1858 1.50826C16.1858 1.11055 16.0203 0.72913 15.7257 0.447907C15.4311 0.166684 15.0315 0.00869499 14.6148 0.00869499H5.18899C3.93905 0.00869499 2.7403 0.482663 1.85646 1.32633C0.972613 2.17 0.476074 3.31426 0.476074 4.50739V25.5013C0.476074 26.6944 0.972613 27.8387 1.85646 28.6824C2.7403 29.526 3.93905 30 5.18899 30H27.1826C28.4326 30 29.6313 29.526 30.5152 28.6824C31.399 27.8387 31.8955 26.6944 31.8955 25.5013V16.5039C31.8955 16.1062 31.73 15.7248 31.4354 15.4436C31.1408 15.1623 30.7412 15.0043 30.3246 15.0043ZM-nan -nanL6.75997 16.144V22.5022C6.75997 22.8999 6.92548 23.2813 7.22009 23.5625C7.51471 23.8438 7.91429 24.0017 8.33094 24.0017H14.9919C15.1986 24.0029 15.4036 23.9651 15.595 23.8904C15.7864 23.8158 15.9605 23.7058 16.1073 23.5669L26.9784 13.1749L31.44 9.00609C31.5872 8.86668 31.7041 8.70083 31.7838 8.51809C31.8636 8.33536 31.9046 8.13936 31.9046 7.9414C31.9046 7.74343 31.8636 7.54743 31.7838 7.3647C31.7041 7.18196 31.5872 7.01611 31.44 6.8767L24.779 0.443569C24.633 0.303017 24.4592 0.191458 24.2678 0.115327C24.0764 0.039196 23.871 0 23.6636 0C23.4563 0 23.2509 0.039196 23.0595 0.115327C22.868 0.191458 22.6943 0.303017 22.5482 0.443569L18.1181 4.68734L7.21555 15.0793C7.06995 15.2194 6.95476 15.3856 6.87658 15.5683C6.7984 15.751 6.75877 15.9467 6.75997 16.144L-nan -nanL-nan -nanZM22.6001 4.63784C23.1953 4.06969 24.132 4.06969 24.7272 4.63784L26.9422 6.75223C27.5779 7.35902 27.5779 8.37382 26.9423 8.9806V8.9806C26.347 9.54876 25.4104 9.54876 24.8152 8.9806L22.6001 6.86622C21.9644 6.25943 21.9644 5.24463 22.6001 4.63784V4.63784ZM9.90191 18.0306C9.90191 17.2184 10.2343 16.4415 10.8218 15.8807L17.0982 9.88966C18.2844 8.75735 20.1511 8.75736 21.3374 9.88966V9.88966C22.6043 11.099 22.6043 13.1214 21.3374 14.3307L15.2677 20.1245C14.6772 20.6881 13.8923 21.0026 13.076 21.0026H12.8739C11.2325 21.0026 9.90191 19.672 9.90191 18.0306V18.0306Z" fill="black"/>
                        </svg>
                        
                        
                    <p class="p-botao">Publicar artigo</p>
                </button>

                <section class="artigo-principal">

                    <img class="img-principal" src="./imagem1.jpg" alt="Imagem 1"/> 
                    
                    <div class="conteudo">

                        <div class="titulos-principal">
                            <h2 class="h2-principal">Título: Lorem Ipsum</h2>

                            <h3 class="h3-principal">Tema: Lorem Ipsum</h3>
                        </div>

                        <p class="p-principal">
                            Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry. Lorem Ipsum has been the industry's standard dummy 
                            text ever since the 1500s, when an unknown printer took a galley 
                            of type and scrambled it to make a type specimen book. It has 
                            survived not only five centuries, but also the leap into electronic 
                            typesetting, remaining essentially unchanged. It was popularised 
                            in the 1960s with the release of Letraset sheets containing Lorem 
                            Ipsum passages, and more recently with desktop publishing.
                        </p>

                    </div>
                
                </section>

                <div class="estrelas">
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.76 1.61804L14.0325 8.61214L14.1448 8.95763H14.5081H21.8621L15.9126 13.2802L15.6187 13.4938L15.7309 13.8392L18.0035 20.8334L12.0539 16.5108L11.76 16.2972L11.4661 16.5108L5.51658 20.8334L7.78911 13.8392L7.90137 13.4938L7.60747 13.2802L1.65793 8.95763H9.01197H9.37524L9.4875 8.61214L11.76 1.61804Z" fill="#FFF500" stroke="black"/>
                    </svg>  
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.76 1.61804L14.0325 8.61214L14.1448 8.95763H14.5081H21.8621L15.9126 13.2802L15.6187 13.4938L15.7309 13.8392L18.0035 20.8334L12.0539 16.5108L11.76 16.2972L11.4661 16.5108L5.51658 20.8334L7.78911 13.8392L7.90137 13.4938L7.60747 13.2802L1.65793 8.95763H9.01197H9.37524L9.4875 8.61214L11.76 1.61804Z" fill="#FFF500" stroke="black"/>
                    </svg>  
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.76 1.61804L14.0325 8.61214L14.1448 8.95763H14.5081H21.8621L15.9126 13.2802L15.6187 13.4938L15.7309 13.8392L18.0035 20.8334L12.0539 16.5108L11.76 16.2972L11.4661 16.5108L5.51658 20.8334L7.78911 13.8392L7.90137 13.4938L7.60747 13.2802L1.65793 8.95763H9.01197H9.37524L9.4875 8.61214L11.76 1.61804Z" fill="#FFF500" stroke="black"/>
                    </svg>  
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.76 1.61804L14.0325 8.61214L14.1448 8.95763H14.5081H21.8621L15.9126 13.2802L15.6187 13.4938L15.7309 13.8392L18.0035 20.8334L12.0539 16.5108L11.76 16.2972L11.4661 16.5108L5.51658 20.8334L7.78911 13.8392L7.90137 13.4938L7.60747 13.2802L1.65793 8.95763H9.01197H9.37524L9.4875 8.61214L11.76 1.61804Z" fill="#FFF500" stroke="black"/>
                    </svg>  
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.76 1.61804L14.0325 8.61214L14.1448 8.95763H14.5081H21.8621L15.9126 13.2802L15.6187 13.4938L15.7309 13.8392L18.0035 20.8334L12.0539 16.5108L11.76 16.2972L11.4661 16.5108L5.51658 20.8334L7.78911 13.8392L7.90137 13.4938L7.60747 13.2802L1.65793 8.95763H9.01197H9.37524L9.4875 8.61214L11.76 1.61804Z" fill="#FFF500" stroke="black"/>
                    </svg>     
                </div>
                

            <div class="linha-artigos1">
                <Artigos imagem="./imagem2.jpg" disc="Imagem 2"></Artigos>
                <Artigos imagem="./imagem3.jpg" disc="Imagem 3"></Artigos>
                <Artigos imagem="./imagem4.jpg" disc="Imagem 4"></Artigos>
            </div>
            <div class="linha-artigos2">
                <Artigos imagem="./imagem5.jpg" disc="Imagem 5"></Artigos>
                <Artigos imagem="./imagem6.jpg" disc="Imagem 6"></Artigos>
                <Artigos imagem="./imagem7.jpg" disc="Imagem 7"></Artigos>
            </div>

            </div>

            <div class="botao-linha">
                <div></div>
                <button class="ver-mais">Ver mais...</button>
                
            </div>

            <div class="filtros">
                <div class="icone-filtro">

                    <h2 class="h2-filtro">Filtros</h2>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 1.80878e-07 2.20435 1.80878e-07 3V4.17C-0.000143207 4.58294 0.0849664 4.99147 0.25 5.37V5.43C0.39128 5.75097 0.591392 6.04266 0.84 6.29L7 12.41V19C6.99966 19.1699 7.04264 19.3372 7.12487 19.4859C7.20711 19.6346 7.32589 19.7599 7.47 19.85C7.62914 19.9486 7.81277 20.0006 8 20C8.15654 19.9991 8.31068 19.9614 8.45 19.89L12.45 17.89C12.6149 17.8069 12.7536 17.6798 12.8507 17.5227C12.9478 17.3656 12.9994 17.1847 13 17V12.41L19.12 6.29C19.3686 6.04266 19.5687 5.75097 19.71 5.43V5.37C19.8888 4.99443 19.9876 4.58578 20 4.17V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM11.29 11.29C11.1973 11.3834 11.124 11.4943 11.0742 11.6161C11.0245 11.7379 10.9992 11.8684 11 12V16.38L9 17.38V12C9.00076 11.8684 8.97554 11.7379 8.92577 11.6161C8.87601 11.4943 8.80268 11.3834 8.71 11.29L3.41 6H16.59L11.29 11.29ZM18 4H2V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V4Z" fill="black"/>
                    </svg>
                        
                </div>

                <Filtros nome="Autor"/>
                <Filtros nome="Ano de publicação"/>
                <Filtros nome="Título"/>
                <Filtros nome="Avaliação"/>
                <Filtros nome="Tema"/>

            </div>
            </main>
    </>
  );

}