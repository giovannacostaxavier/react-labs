import useAlternador from "./Alternador";

const Luz =()=>{
    const [ligado,Alternar] = useAlternador()

    return(
        <div>
            <p>Luz : {ligado ? "Ligada" : "Desligada"}</p>
            <button onClick={()=> Alternar()}>Trocar</button>
        </div>
      
        
    )
}
export default Luz