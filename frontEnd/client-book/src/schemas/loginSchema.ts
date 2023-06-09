import * as yup from "yup"

export const LoginSchema = yup.object({
    email: yup.string().required("Insira o email"),
    password: yup.string().required("Insira a senha").min(8, "Senha deve ter pelo menos 8 caracteres")
})

export const RegisterUserSchema = yup.object({
    name: yup.string().required("Insira o nome"),
    email: yup.string().required("Insira o email"),
    password: yup.string().required("Insira a senha").min(8, "Senha deve ter pelo menos 8 caracteres")
})

export const RegisterSchema = yup.object({
    fullName: yup.string().required("Insira o nome"),
    email: yup.string().required("Insira o email"),
    phone: yup.string().required("Insira o telefone"),
})

export const UpdateSchema = yup.object({
    fullName: yup.string().optional(),
    email: yup.string().optional(),
    phone: yup.string().optional(),
})