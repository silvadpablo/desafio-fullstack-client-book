import { yupResolver } from "@hookform/resolvers/yup";
import { iRegisterRequest, iUpdateRequest } from "../../types/types";
import { CreateButton, DeleteButton } from "../buttons/buttons";
import { CustomInput } from "../inputs/inputs";
import { StyledDialog } from "./styledDialogs";
import { useForm } from "react-hook-form";
import { RegisterSchema, UpdateSchema } from "../../schemas/loginSchema";

interface dialogProps {
    dialogOpen: boolean
    setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface updateDialogProps {
    updateDialogOpen: boolean
    setUpdateDialogOpen: React.Dispatch<React.SetStateAction<boolean>>

}

export function CreateDialog ( { dialogOpen, setDialogOpen }: dialogProps ) {
    const { handleSubmit, register, formState: {errors}} = useForm<iRegisterRequest>({
        resolver: yupResolver(RegisterSchema)
    })

    // async function handleRegister (data: iLoginRequest) {
    //     login(data)
    // }
    function closeDialog() {
        setDialogOpen(false)
    }
    return (
        <StyledDialog className="flex flex-col justify-center items-center">
                <form className="flex flex-col">
                    <div className="flex justify-between">
                        <h2>Cadastrar novo</h2>
                        <p onClick={closeDialog} className="close">X</p>
                    </div>
                    <div className="form flex flex-col">
                        <CustomInput register={register("fullName")} label="Nome" type="text" placeholder="Digite um nome"/>
                        {errors.fullName && <span>{errors.fullName.message}</span>}
                        <CustomInput register={register("email")} label="Email" type="text" placeholder="Digite um email"/>
                        {errors.email && <span>{errors.email.message}</span>}
                        <CustomInput register={register("phone")} label="Telefone" type="text" placeholder="Digite um telefone"/>
                        {errors.phone && <span>{errors.phone.message}</span>}
                        <CreateButton closeDialog={closeDialog}/>
                    </div>
                </form>
        </StyledDialog>
    )
}

export function UpdateDialog ( { updateDialogOpen, setUpdateDialogOpen }: updateDialogProps ) {
    const { handleSubmit, register, formState: {errors}} = useForm<iUpdateRequest>({
        resolver: yupResolver(UpdateSchema)
    })

    function closeDialog() {
        setUpdateDialogOpen(false)
    }
    return (
        <StyledDialog className="flex flex-col justify-center items-center">
                <form className="flex flex-col">
                    <div className="flex justify-between">
                        <h2>Atualizar registro</h2>
                        <p onClick={closeDialog} className="close">X</p>
                    </div>
                    <div className="form flex flex-col">
                    <CustomInput register={register("fullName")} label="Nome" type="text" placeholder="Digite um nome"/>
                        {errors.fullName && <span>{errors.fullName.message}</span>}
                        <CustomInput register={register("email")} label="Email" type="text" placeholder="Digite um email"/>
                        {errors.email && <span>{errors.email.message}</span>}
                        <CustomInput register={register("phone")} label="Telefone" type="text" placeholder="Digite um telefone"/>
                        {errors.phone && <span>{errors.phone.message}</span>}
                        <CreateButton closeDialog={closeDialog}/>
                        <DeleteButton closeDialog={closeDialog}/>
                    </div>
                </form>
        </StyledDialog>
    )
}