import { useState } from "react";
import useFavoritoStore from "./useFavoritoStore";

const ListaFavoritos = ()=>{
    const favoritos = useFavoritoStore((state)=> state.favoritos)
    const adicionarFavorito = useFavoritoStore((state)=> state.adicionarFavorito)
    const [nome,setnome] = useState("")

    return(
        <div>
            <input 
            className="border border-gray-400"
            value={nome}
            onChange={(evt)=>setnome(evt.target.value)} />
            <button onClick={()=> adicionarFavorito(nome)}>
                Adicionar
            </button>
            <ul>
                {favoritos.map((el,ind)=>{
                    return (
                    <li key={ind}>
                        {el}
                    </li>
                    )
                })}
            </ul>
        </div>
    )

}

export default ListaFavoritos