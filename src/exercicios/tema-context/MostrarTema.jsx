import { ContextoTema } from "./ContextoTema";
import { useContext } from "react";

const MostrarTema =()=>{
    const {tema} = useContext(ContextoTema)

    return(
        <p>O tema atual é {tema}</p>
    )
}

export default MostrarTema