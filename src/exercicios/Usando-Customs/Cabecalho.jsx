import useSaudacao from "./Saudacao";

const Cabecalho =()=>{
    const mensagem = useSaudacao()

    return(
        <div>
            <p>{mensagem}</p>
        </div>
    )
}
export default Cabecalho