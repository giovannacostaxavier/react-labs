import { useParams, useNavigate} from "react-router-dom"

const DetalhesdeContacto = ()=>{
    const {id} = useParams()

    const navegate = useNavigate()

    const NavegateRota = ()=>{
        console.log("voltar pra navegacao");
        return navegate ("/")
    }
    return(
        <div>
            <p>Informações do contact {id}</p>
            <button onClick={NavegateRota}>Enviar mensagem</button>
        </div>
    )

}
export default DetalhesdeContacto