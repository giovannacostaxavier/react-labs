import { useCallback, useState } from "react";

const Saudacao =()=>{
    const [nome,setNome]=useState("")

    const mostrarSaudacao = useCallback(()=>{
        console.log("Olá, " + nome);
        
    },[nome])

    return(
        <div>
            <input
            value={nome}
            onChange={(evt)=>setNome(evt.target.value)}
            />
            <button onClick={()=>mostrarSaudacao()}>Mostrar Saudação</button>
        </div>
    )
}
export default Saudacao