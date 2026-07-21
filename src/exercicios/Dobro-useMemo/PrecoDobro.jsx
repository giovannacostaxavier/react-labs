import { useState,useMemo } from "react";

const PrecoDobro =()=>{
    const [preco,setPreco] = useState(10);
    const [texto,setTexto] = useState("");

    const Dobro = useMemo(()=>{
        console.log("Dobrando...");
        return preco * 2
        
    },[preco])
    
    
    return(
        <div>
            <p>Preço: {preco}</p>
            <p>Dobro: {Dobro}</p>
            <button onClick={()=>setPreco(prev => prev +5)}>+5</button>
            
            <br/>

            <input
            value={texto}
            onChange={(evt)=>setTexto(evt.target.value)}
            placeholder="Digite qualquer coisa"
            />
        </div>
    )
}

export default PrecoDobro