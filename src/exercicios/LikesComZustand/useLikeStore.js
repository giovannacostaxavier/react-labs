import { create } from "zustand";

const useLikeStore = create ((set)=>({
    curtindo: false,
    alternarCurtida: ()=> set ((state)=> ({curtindo: !state.curtindo }))

}))

export default useLikeStore