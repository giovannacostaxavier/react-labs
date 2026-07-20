import ProviderTema from "./exercicios/tema-context/ProviderTema"
import BotaoTema from "./exercicios/tema-context/BotaoTema"
import MostrarTema from "./exercicios/tema-context/MostrarTema"
const App =()=>{

  return(
    <ProviderTema>
      <MostrarTema/>
      <BotaoTema/>
    </ProviderTema>
  )
}

export default App
