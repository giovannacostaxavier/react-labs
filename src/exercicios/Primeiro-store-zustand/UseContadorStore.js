import { create } from "zustand";

const useContadorStore = create ((set)=>({
    contador: 0,
    incrementar: () => set((state)=> ({contador: state.contador +1}))

}))
export default useContadorStore