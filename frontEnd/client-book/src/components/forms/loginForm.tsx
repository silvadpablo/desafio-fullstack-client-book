import { useContext } from "react";
import { LoginButton, RegisterButton } from "../buttons/buttons";
import { CustomInput } from "../inputs/inputs";
import { StyledForm } from "./styledForms";
import { userContext } from "../../contexts/userContext";
import { useForm } from "react-hook-form";
import { iLoginRequest } from "../../types/types";
import { LoginSchema } from "../../schemas/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup"

export function LoginForm () {
    const { login } = useContext(userContext)

    const { handleSubmit, register, formState: {errors}} = useForm<iLoginRequest>({
        resolver: yupResolver(LoginSchema)
    })

    async function handleLogin (data: iLoginRequest) {
        login(data)
    }
    return (
        <StyledForm className="flex flex-col" onSubmit={handleSubmit(handleLogin)} noValidate>
            <h1>Todos os seus contatos em um só lugar</h1>
            <h2>Insira os dados para fazer seu login!</h2>
            <CustomInput register={register("email")} label="Email" type="text" placeholder="Digite o seu email"/>
            {errors.email && <span>{errors.email.message}</span>}
            <CustomInput register={register("password")} label="Senha" type="password" placeholder="Digite sua senha"/>
            {errors.password && <span>{errors.password.message}</span>}
            <LoginButton/>
            <RegisterButton/>
        </StyledForm>
    )
}