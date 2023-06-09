import { createContext, useContext, useEffect, useState } from "react";
import { iContextProps, iLoginRequest, iLoginResponse, iRegisterUserRequest, iRegisterUserResponse, iUser } from "../types/types";
import { api } from "../services/axios";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { clientContext } from "./clientContext";

interface iUserContext {
    user: iUser | undefined
    setUser: React.Dispatch<React.SetStateAction<iUser | undefined>>
    token: string
    login: (data: iLoginRequest) => void
    logout: () => void
    registerUser: (data: iRegisterUserRequest) => Promise<void>
}

export const userContext = createContext({} as iUserContext)

export const UserProvider = ( { children }: iContextProps ) => {
    const [user, setUser] = useState<iUser>()
    const [token, setToken] = useState<string>("")
    const { getClients } = useContext(clientContext)
    const [loadingPage, setLoadingPage] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        async function load() {
            const token = localStorage.getItem("clientBookToken")
            const id = localStorage.getItem("clientBookId")

            if(token) {
                try {
                    api.defaults.headers.common.Authorization = `Bearer ${token}`
                    const response = await api.get(`users/${id}`)
                    setUser(response.data)
                } catch(error){
                    localStorage.removeItem("clientBookToken")
                }
            }
            setLoadingPage(false)
        }
        load()
    }, [])

    async function login (data: iLoginRequest): Promise<void> {
        try {
            const response = await api.post<iLoginResponse>("login/", data, {
                headers: { "Content-Type": "application/json"}
            })
            api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
            toast.success("Login realizado com sucesso")
            setToken(response.data.token)
            setUser(response.data.foundUser)
            localStorage.setItem("clientBookToken", response.data.token)
            localStorage.setItem("clientBookId", response.data.foundUser.id.toString())
            navigate("/main")
        } catch (error) {
            console.log(error)
            const typeError = error as AxiosError<any>
            if (typeError.response?.status === 401) {
                toast.error("Senha ou email incorretos")
            } else {
                toast.error(typeError.message)
            }
        }
    }

    async function registerUser (data: iRegisterUserRequest): Promise<void> {
        try {
            await api.post<iRegisterUserResponse>("users/", data, {
                headers: { "Content-Type": "application/json"}
            })

            toast.success("Usuário cadastrado com successo")
            navigate("/")

        } catch (error) {
            const typeError = error as AxiosError<any>
            if (typeError.response?.status !== 400) {
                toast.error("Aconteceu algum erro")
            } else {
                console.log(typeError.response.data.message)
                toast.error(typeError.response.data.message)
            }
        }
    }

    async function logout () {
        setToken("")
        localStorage.removeItem("clientBookToken")
        localStorage.removeItem("clientBookId")
        toast.success("Logout realizado com sucesso")
        navigate("/")
    }

    return (
        <userContext.Provider
            value={{
                user,
                setUser,
                token,
                login,
                logout,
                registerUser,
            }}
        >
            {children}
        </userContext.Provider>
    )
}