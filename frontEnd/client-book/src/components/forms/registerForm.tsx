import { useContext } from "react";
import { GoBackButton, LoginButton, RegisterButton } from "../buttons/buttons";
import { CustomInput } from "../inputs/inputs";
import { StyledForm } from "./styledForms";
import { userContext } from "../../contexts/userContext";
import { useForm } from "react-hook-form";
import { iRegisterUserRequest } from "../../types/types";
import { RegisterUserSchema } from "../../schemas/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup"

export function RegisterForm () {
    const { registerUser } = useContext(userContext)

    const { handleSubmit, register, formState: {errors}} = useForm<iRegisterUserRequest>({
        resolver: yupResolver(RegisterUserSchema)
    })

    async function handleRegister (data: iRegisterUserRequest) {
        registerUser(data)
    }
    return (
        <StyledForm className="flex flex-col" onSubmit={handleSubmit(handleRegister)} noValidate>
            <h1>Todos os seus contatos em um só lugar</h1>
            <h2>Insira os dados para fazer seu cadastro!</h2>
            <CustomInput register={register("name")} label="Nome" type="text" placeholder="Digite o seu nome"/>
            {errors.name && <span>{errors.name.message}</span>}
            <CustomInput register={register("email")} label="Email" type="text" placeholder="Digite o seu email"/>
            {errors.email && <span>{errors.email.message}</span>}
            <CustomInput register={register("password")} label="Senha" type="password" placeholder="Digite sua senha"/>
            {errors.password && <span>{errors.password.message}</span>}
            <RegisterButton/>
            <GoBackButton/>
        </StyledForm>
    )
}