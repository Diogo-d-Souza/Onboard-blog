import GlobalStyle from "../styles/globals";
import ArtigoPrincipal from "../components/Art_Principal";
import Header from "../components/Header";

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