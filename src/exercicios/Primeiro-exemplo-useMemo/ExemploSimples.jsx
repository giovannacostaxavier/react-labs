import { useState,useMemo } from "react";

const ExemploSimples =()=>{
 const [numero,setNumero] = useState(3)
 const [texto,setTexto] = useState("")

 const quadrado = useMemo(()=>{
    console.log("Calculando o quadrado...");
    return numero * numero
 },[numero])

    return(
        <div>
            <p>Número {numero}</p>
            <p>Quadrado {quadrado}</p>
            <button onClick={()=> setNumero(prev => prev +1)}>+1</button>
            <br/>
            <input
            value={texto}
            onChange={(el)=> setTexto(el.target.value)}
            placeholder="Digite qualquer coisa"
            />
        </div>
    )
}


export default ExemploSimples