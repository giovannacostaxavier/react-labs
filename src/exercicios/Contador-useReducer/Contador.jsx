import { useReducer } from "react";

const reducer =(estado,acao)=>{
    if (acao === "somar") {
        return estado +1;
    }
    if (acao === "subtrair") {
        return estado -1;
    }
    return estado
}

const Contador=()=>{
    const [numero,dispatch] = useReducer(reducer,0);
    return(
        <div>
             <p>Número {numero}</p>
             <button onClick={()=> dispatch("somar")}>+1</button>
             <button onClick={()=> dispatch("subtrair")}>-1</button>
        </div>
    )
}
export default Contador