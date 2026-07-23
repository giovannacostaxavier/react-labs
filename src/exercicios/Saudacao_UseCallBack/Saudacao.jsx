import { useCallback, useEffect, useState } from "react";

const Saudacao =()=>{
    const [nome,setNome]=useState("")
    const [contador, setContador]=useState(0)

    const mostrarSaudacao = useCallback(()=>{
        console.log("Olá, " + nome);
        
    },[nome])

    useEffect (()=>{
        console.log("Mostrar saudação MUDOU!");
    },[mostrarSaudacao])

    return(
        <div>
            <input
            value={nome}
            onChange={(evt)=>setNome(evt.target.value)}
            />
            <button onClick={()=>mostrarSaudacao()}>Mostrar Saudação</button>
            <button onClick={()=>setContador(prev=> prev +1)}>+1</button>
        </div>
    )
}
export default Saudacao