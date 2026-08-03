import { Link } from "react-router-dom"
const Contacts = ()=>{

    return(
        <div className="bg-blue-300">
            <h1>Contactos</h1>

            <Link to="1">contacto 1</Link>
            <Link to="2">contacto 2</Link>
            <Link to="3">contacto 3</Link>
        </div>
    )

}
export default Contacts