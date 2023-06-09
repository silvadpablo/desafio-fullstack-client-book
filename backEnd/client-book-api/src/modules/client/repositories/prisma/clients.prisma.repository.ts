/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ClientsRepository } from "../client.repository";
import { PrismaService } from "src/database/prisma.service";
import { CreateClientDto } from "../../dto/create-client.dto";
import { UpdateClientDto } from "../../dto/update-client.dto";
import { Client } from "../../entities/client.entity";
import { plainToInstance } from "class-transformer";

@Injectable()
export class ClientsPrismaRepository implements ClientsRepository{
    constructor(private prisma: PrismaService) {}
    async create(data: CreateClientDto): Promise<Client> {
        const client = new Client()
        Object.assign(client, {
            ...data
        })
        const newClient = await this.prisma.clients.create({
            data: { ...client }
        })
        return plainToInstance(Client, newClient)
    }
    async findAll(): Promise<Client[]> {
        const clients: Client[] = await this.prisma.clients.findMany()
        return plainToInstance(Client, clients)
    }
    async findOne(id: string): Promise<Client> {
        const client = await this.prisma.clients.findUnique({
            where: { id }
        })
        return plainToInstance(Client, client)
    }
    async update(id: string, data: UpdateClientDto): Promise<Client> {
        const client = await this.prisma.users.update({
            where: { id },
            data: { ...data }
        })
        return plainToInstance(Client, client)
    }
    async delete(id: string): Promise<void> {
        await this.prisma.clients.delete({
            where: { id }
        })
    }
}