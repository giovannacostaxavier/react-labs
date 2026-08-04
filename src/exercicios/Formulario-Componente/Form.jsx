import { useForm } from "react-hook-form"

const Form =()=>{
    const {register,handleSubmit,formState: {errors}} = useform()

    const aoEnviar = (dados)=>{
        console.log(dodos);
        
    }
    return(
       <form onSubmit={handleSubmit(aoEnviar)}>
        <input {...register ("nome",{required : true})}/>
        {errors.nome && <p>O nome é obrigatório</p>}

        <input {...register ("email",{required : true})}/>
        {errors.email && <p>O email é obrigatório</p>}

       </form>
    )
}
export default Form