import useSaudacao from "./exercicios/Usando-Customs/Saudacao"

const App =()=>{
    const mensagem = useSaudacao()
  return(
    <div>
      <p>{mensagem}</p>
    </div>
  )
}

export default App
