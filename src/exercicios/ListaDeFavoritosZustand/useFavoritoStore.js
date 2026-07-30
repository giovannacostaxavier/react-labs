import { create } from "zustand";

const useFavoritoStore = create ((set)=>({
    favoritos: [],
    adicionarFavorito: (item)=> set ((state)=>({favoritos: [...state.favoritos,item]}))
}))

export default useFavoritoStore