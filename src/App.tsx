
import Header from "./components/header"
import Span from "./components/span"
import Footer from "./components/footer"
import Servicos from "./components/servicos"
import Localizacao from "./components/localizacao"
import { GlobalStyles } from "./globalstyle"
import Contato from "./components/contato"
import Missao from "./components/missao"

function App() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <Missao />
      <Servicos />
      <Localizacao />
      <Contato />
      <Span />
      <Footer />
    </>
  )
}

export default App
