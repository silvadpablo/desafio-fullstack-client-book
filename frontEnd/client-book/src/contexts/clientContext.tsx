import { createContext, useContext, useEffect, useState } from "react";
import { iClient, iContextProps, iRegisterRequest, iRegisterUserRequest, iRegisterUserResponse } from "../types/types";
import { api } from "../services/axios";
import { userContext } from "./userContext";

interface iClientContext {
    clients: iClient[]
    getClients: (config: any) => Promise<void>
}

export const clientContext = createContext({} as iClientContext)

export const ClientProvider = ( { children }: iContextProps) => {
    const { user } = useContext(userContext)
    const [clients, setClients] = useState<iClient[]>([])
    
    const token = localStorage.getItem("clientBookToken")
    const config = {
        headers: { Authorization: `Bearer ${token}`}
    }
    
    async function getClients (config: any) {
        const allClients = await api.get<iClient[]>(
            "client",
            config
        )
        setClients(allClients.data)
    }
    useEffect(() => {
        if (user === undefined) {
            return
        }
        const token = localStorage.getItem("clientBookToken")
        const config = {
            headers: { Authorization: `Bearer ${token}`}
        }

        getClients(config)
        ghostRender(config)
    }, [user])

    async function ghostRender (config: any) {
        const allClients = await api.get<iClient[]>(
            "client",
            config
        )
        setClients(allClients.data)
    }

    async function createClient (data: iRegisterRequest) {
        try {
            const response = await api.post(
                "client",
                data,
                config
            )
        } catch (error) {
            
        }
    }

    return (
        <clientContext.Provider
            value={{
                clients,
                getClients
            }}
        >
            { children }
        </clientContext.Provider>
    )
}