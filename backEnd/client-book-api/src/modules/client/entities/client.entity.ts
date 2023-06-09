/* eslint-disable prettier/prettier */
import { randomUUID } from "crypto";

export class Client {
    readonly id: string
    fullName: string
    email: string
    phone: string

    constructor() {
        this.id = randomUUID()
    }
}
