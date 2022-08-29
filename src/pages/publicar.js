import GlobalStyle from "../styles/globals";
import Header from "../components/Cabecalho";
import Publicar from "../components/Publicar";
export default function Home (){
  return (
    <>
      <GlobalStyle/>
      <main>
        <Header/>
        <Publicar/>
      </main>
    </>
  )
}