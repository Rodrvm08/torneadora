
import Header from "./components/header"
import Span from "./components/span"
import Footer from "./components/footer"
import Servicos from "./components/servicos"
import Localizacao from "./components/localizacao"
import { GlobalStyles } from "./globalstyle"
import Contato from "./components/contato"

function App() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <Span />
      <Servicos />
      <Localizacao />
      <Contato />
      <Footer />
    </>
  )
}

export default App
