import { Outlet } from "react-router-dom"
import Navegacao from "./exercicios/React-Router-primeiros-testes/Navegacao"

const App =()=>{
   
  return(
    <div>

      <Outlet/>
      <Navegacao/>
      

    </div>
  )
}

export default App
