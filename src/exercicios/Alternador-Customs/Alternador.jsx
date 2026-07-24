import { useState } from "react";

const useAlternador =()=>{
    const [ligado,setLigado]=useState(false)

    const Alternar=()=>{
        setLigado(prev=> !prev)
    }
    return [ligado,Alternar]
}
export default useAlternador