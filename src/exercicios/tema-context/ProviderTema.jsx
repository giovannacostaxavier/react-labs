import { useState } from "react";
import { ContextoTema } from "./ContextoTema";

const ProviderTema =({children})=>{
    const [tema,setTema]=useState("Claro")
    return(
        <ContextoTema.Provider value={{tema,setTema}}>
            {children}
        </ContextoTema.Provider>
    )
}

export default ProviderTema