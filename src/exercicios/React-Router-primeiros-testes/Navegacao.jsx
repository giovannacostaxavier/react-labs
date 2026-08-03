import { Link } from "react-router-dom"

const Navegacao= ()=>{
    return(
        <nav>
            <Link to="/">Home</Link>
            <br/>
            <Link to="contacts">Contactos</Link>
            <br/>
            <Link to="Error">Erro 404</Link>
        </nav>
    )
}
export default Navegacao