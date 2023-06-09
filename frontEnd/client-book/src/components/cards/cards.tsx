import { useState } from "react";
import { CreateDialog, UpdateDialog } from "../dialogs/dialogs";
import { StyledClientCard, StyledContactCard } from "./styledCards";
import { iClient } from "../../types/types";

interface iClientCard {
    client: iClient
    selectClient: (client: iClient) => any
}

interface iContactCard {
    showContact: () => void
}
export function ClientCard ( { client, selectClient }: iClientCard ) {
    const [updateDialogOpen, setUpdateDialogOpen] = useState(false)

    function openUpdateDialog() {
        setUpdateDialogOpen(true)
    }

    return (
        <>
            {updateDialogOpen && <UpdateDialog updateDialogOpen={updateDialogOpen} setUpdateDialogOpen={setUpdateDialogOpen}/>}
            <StyledClientCard onClick={selectClient(client)} className="flex flex-col">
                <p>{client.fullName}</p>
                <button onClick={openUpdateDialog}>Editar</button>
            </StyledClientCard>
        </>
    )
}

export function ContactCard ( ) {
    const [updateDialogOpen, setUpdateDialogOpen] = useState(false)

    function openUpdateDialog() {
        setUpdateDialogOpen(true)
    }
    return (
        <StyledContactCard className="flex flex-col">
            {updateDialogOpen && <UpdateDialog updateDialogOpen={updateDialogOpen} setUpdateDialogOpen={setUpdateDialogOpen}/>}
            <p>Pablo Diego Batista da Silva Clementino Alves Costa</p>
            <p>essemeuemailébemgrande@gmail.com.br</p>
            <p>+5583999999999</p>
            <button onClick={openUpdateDialog}>Editar</button>
        </StyledContactCard>
    )
}