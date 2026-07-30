import useContadorStore from "./useContadorStore"
const Botao = ()=>{
    const contador = useContadorStore((state)=> state.contador)
    const incrementar = useContadorStore((state)=> state.incrementar)

    return (
        <button onClick={incrementar}>
            cliques {contador} vezes 
        </button>
    )

}
export default Botao