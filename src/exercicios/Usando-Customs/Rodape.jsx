import useSaudacao from "./Saudacao";

const Rodape =()=>{
    const mensagem = useSaudacao()
    return(
        <div>
            <p>{mensagem}</p>
        </div>
    )
}
export default Rodape