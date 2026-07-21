import { useReducer } from "react";

const reducer =(estado,acao)=>{
    if (acao === "Alterar") {
        if (estado === "Ligada") {
            return "Desligada"
        }else{
            return "Ligada"
        }
    }
    return estado
}

const Interruptor =()=>{
    const [ligaDesliga,dispatch] = useReducer(reducer,"Ligada")

    return(
        <div>
            <p>{ligaDesliga}</p>
            <button onClick={()=> dispatch("Alterar")}>Alterar</button>
        </div>
    )
}
export default Interruptor