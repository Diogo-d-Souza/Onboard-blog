import Header from "./components/header";
import GlobalStyle from "../styles/globals";
import ArtigoPrincipal from "./components/Art_principal";

export default function Home (){
  return (
    <>
      <GlobalStyle/>
      <main>
        <Header/>
        <ArtigoPrincipal></ArtigoPrincipal>
      </main>
    </>
  )
}