import { useNavigate } from "react-router-dom";
import { StyledButton, StyledGreenButton, StyledRedButton } from "./styledButtons";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";

interface buttonProps {
    closeDialog?(): void
}

export function LoginButton () {
    return (
        <StyledButton>Login</StyledButton>
    )
}

export function RegisterButton () {
    const navigate = useNavigate()
    function handleClick() {
        navigate("/new")
    }
    return (
        <StyledGreenButton onClick={handleClick}>Cadastre-se</StyledGreenButton>
    )
}

export function GoBackButton () {
    const navigate = useNavigate()
    function handleClick () {
        navigate("/")
    }
    return (
        <StyledButton onClick={handleClick}>Voltar para o login</StyledButton>
    )
}

export function CreateButton ( { closeDialog }:buttonProps ) {
    return (
        <StyledGreenButton onClick={closeDialog}>Cadastrar</StyledGreenButton>
    )
}

export function UpdateButton ( { closeDialog }:buttonProps ) {
    return (
        <StyledGreenButton onClick={closeDialog}>Atualizar</StyledGreenButton>
    )
}

export function DeleteButton ( { closeDialog }:buttonProps ) {
    return (
        <StyledRedButton onClick={closeDialog}>Excluir</StyledRedButton>
    )
}

export function LogoutButton () {
    const { logout } = useContext(userContext)
    return (
        <StyledGreenButton onClick={logout}>Sair</StyledGreenButton>
    )
}