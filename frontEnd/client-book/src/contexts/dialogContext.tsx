import { createContext, useState } from "react";
import { iContextProps } from "../types/types";

interface iDialogContext {
    dialogOpen: boolean
    setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
    openModal: (children: React.ReactNode) => void;
    closeModal: () => void;
    childrenModal: React.ReactNode
}

export const dialogContext = createContext({} as iDialogContext)

export const DialogProvider = ( { children }: iContextProps ) => {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false)
    const [childrenModal, setChildrenModal] = useState<React.ReactNode>()

    function openModal (children: React.ReactNode) {
        setDialogOpen(true)
        setChildrenModal(children)
    }

    function closeModal () {
        setDialogOpen(false)
    }
    return (
        <dialogContext.Provider
            value={{
                dialogOpen,
                setDialogOpen,
                openModal,
                closeModal,
                childrenModal
            }}
        >
            { children }
        </dialogContext.Provider>
    )
}