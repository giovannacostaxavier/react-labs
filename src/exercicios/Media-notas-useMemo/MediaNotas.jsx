import { useState,useMemo } from "react";

const MediaNotas=()=>{
    const [notas,setNotas]=useState([7,8,9])
    const [texto,setTexto]=useState("Nome do aluno")

    const Media = useMemo (()=>{
        console.log("Calculando média...");
        
        const soma = notas.reduce((acc,el)=>{
            return acc + el
        },0)
        return soma / notas.length
    },[notas])
    
    return(
        <div>
            <p>Notas: {notas.join(", ")}</p>
            <p>Média: {Media}</p>
            <button onClick={()=> setNotas([...notas,10])}>Adicionar nota 10</button>
            <br/>
            <input
            value={texto}
            onChange={(el)=> setTexto(el.target.value)}
            
            />
        </div>
    )
}
export default MediaNotas