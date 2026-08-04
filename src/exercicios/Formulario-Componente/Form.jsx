import { useForm } from "react-hook-form"

const Form =()=>{
    const {register,handleSubmit,formState: {errors}} = useform()

    const aoEnviar = (dados)=>{
        console.log(dodos);
        
    }
    return(
       <form onSubmit={handleSubmit(aoEnviar)}>
        <input {...register ("nome",{required : true})} placeholder="Nome"/>
        {errors.nome && <p>O nome é obrigatório</p>}

        <input {...register ("email",{required : true})} placeholder="Email"/>
        {errors.email && <p>O email é obrigatório</p>}

       </form>
    )
}
export default Form