import { useReducer } from "react";

const reducer =(estado,acao)=>{
        if (acao.type === "Incrementar" && estado < 10) {
                return estado +1
        }
        if (acao.type === "Decrementar" && estado > 0) {
                return estado -1
        }
        return estado
}

const ContadorDuploLimite=()=>{
    const[numero,dispatch]=useReducer(reducer,5)
    return(
        <div>
            <p>Contador: {numero}</p>
            <button onClick={()=> dispatch({type:"Incrementar"})}>+1</button>
            <button onClick={()=> dispatch({type:"Decrementar"})}>-1</button>
        </div>
    )
}

export default ContadorDuploLimite