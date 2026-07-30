import UseContadorStore from "./UseContadorStore"
const Botao = ()=>{
    const contador = UseContadorStore((state)=> state.contador)
    const incrementar = UseContadorStore((state)=> state.incrementar)

    return (
        <button onClick={incrementar}>
            cliques {contador} vezes 
        </button>
    )

}
export default Botao