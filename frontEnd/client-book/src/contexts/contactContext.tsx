import { createContext } from "vm";
import { iContact, iContextProps } from "../types/types";
import { useState } from "react";
import { api } from "../services/axios";

interface iContactConext {
    contacts: iContact[]
    getContacts: () => Promise<void>
}

export const contactContext = createContext({} as iContactConext)

export const ContactProvider = ( { children }: iContextProps) => {
    const [contacts, setContacts] = useState<iContact[]>([])
    
    const token = localStorage.getItem("clientBookToken")
    const config = {
        headers: { Authorization: `Bearer ${token}`}
    }

    async function getContacts () {
        const allContacts = await api.get<iContact[]>(
            "contact",
            config
        )
        setContacts(allContacts.data)
    }

    return (
        <contactContext.Provider
            value={{
                contacts,
                getContacts
            }}
        >
            { children }
        </contactContext.Provider>
    )
}