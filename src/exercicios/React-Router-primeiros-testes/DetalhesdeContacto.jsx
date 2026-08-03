import { useParams} from "react-router-dom"

const DetalhesdeContacto = ()=>{
    const {id} = useParams()
    return(
        <div>
            <p>Informações do contact {id}</p>
        </div>
    )

}
export default DetalhesdeContacto