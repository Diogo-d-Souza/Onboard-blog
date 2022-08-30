import GlobalStyle from "../styles/globals";
import Cabecalho_Logado from "../components/Cabecalho_Logado";
import Publicar from "../components/Publicar";
export default function Home (){
  return (
    <>
      <GlobalStyle/>
      <main>
        <Cabecalho_Logado/>
        <Publicar/>
      </main>
    </>
  )
}