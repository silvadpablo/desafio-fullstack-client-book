/* eslint-disable prettier/prettier */

import { randomUUID } from "crypto"

export class Contact {
    readonly id: string
    fullName: string
    email: string
    phone: string
    createdAt: Date    
    clientId?: string

    constructor() {
        this.id = randomUUID()
    }
}
