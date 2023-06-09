import { UseFormRegisterReturn } from "react-hook-form"

export interface iUser {
    name: string
    email: string
    password: string
    id: string
}

export interface iClient {
    id: string
    fullName: string
    email: string
    phone: string
    contacts: iContact[]
}

export interface iContact {
    id: string
    fullName: string
    email: string
    phone: string
    createdAt: Date
    clientId?: string
}

export interface iContextProps {
    children: React.ReactNode
}

export interface iLoginRequest {
    email: string
    password: string
}

export interface iLoginResponse {
    token: string
    foundUser: iUser
}

export interface iRegisterRequest {
    fullName: string
    email: string
    phone: string
}

export interface iUpdateRequest {
    fullName?: string
    email?: string
    phone?: string
}

export interface iCustomInput {
    label: string
    type: string
    placeholder: string
    register: UseFormRegisterReturn<string>
}

export interface iRegisterUserRequest {
    name: string
    email: string
    password: string
}

export interface iRegisterUserResponse {
    id: string
    name: string
    email: string
}