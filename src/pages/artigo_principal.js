import GlobalStyle from "../styles/globals";
import ArtigoPrincipal from "../components/Art_principal";
import Header from "../components/Cabecalho";

export default function Home (){
  return (
    <>
      <GlobalStyle/>
      <main>
        <Header/>
        <ArtigoPrincipal/>
      </main>
    </>
  )
}