import { useReducer } from "react";

const reducer =(estado,acao)=>{
    if (estado < 5) {
        if (acao === "Somar") {
            return estado +1
        }
    }
    return estado
}

const ContadorLimitado =()=>{
    const[numero,dispatch]=useReducer(reducer,0)
    return(
        <div>
            <p>Contador: {numero}</p>
            <button onClick={()=> dispatch("Somar")}>+1</button>
        </div>
    )
}
export default ContadorLimitado