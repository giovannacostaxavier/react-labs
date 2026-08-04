import { useForm } from "react-hook-form"

const Form =()=>{
    const {register,handleSubmit,formState: {errors}} = useForm()

    const aoEnviar = (dados)=>{
        console.log(dados);
        
    }
    return(
       <form onSubmit={handleSubmit(aoEnviar)}>
        <input {...register ("nome",{required : true})} placeholder="Nome"/>
        {errors.nome && <p>O nome é obrigatório</p>}

        <input {...register ("email",{required : true})} placeholder="Email"/>
        {errors.email && <p>O email é obrigatório</p>}

        <button type="submit">Enviar</button>

       </form>
    )
}
export default Form