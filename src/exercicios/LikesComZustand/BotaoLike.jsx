import useLikeStore from "./useLikeStore";

const BotaoLike =()=>{
    const curtindo = useLikeStore((state)=> state.curtindo)
    const alternarCurtida = useLikeStore((state) => state.alternarCurtida)

    return(
        <button className="p-8 bg-gray-400 rounded-lg border border-gray-400 text-black font-bold" onClick={alternarCurtida}>
            {curtindo ? "❤️ Curtido" : "🤍 Curtir"}
        </button>
    )
}

export default BotaoLike