import { useContext } from "react";
import { ContextoTema } from "./ContextoTema";

const BotaoTema =()=>{
    const {setTema} = useContext(ContextoTema)
    return(
        <button onClick={()=>setTema(prev=>prev === "Claro" ? "Escuro" : "Claro")}>Mudar tema</button>
    )
}
export default BotaoTema