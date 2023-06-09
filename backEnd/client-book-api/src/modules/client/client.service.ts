import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsRepository } from './repositories/client.repository';

@Injectable()
export class ClientService {
  constructor(private clientsRepository: ClientsRepository) {}
  create(createClientDto: CreateClientDto) {
    return this.clientsRepository.create(createClientDto);
  }

  findAll() {
    return this.clientsRepository.findAll()
  }

  findOne(id: string) {
    const foundClient = this.clientsRepository.findOne(id);
    if (!foundClient) {
      throw new NotFoundException("Client not found");
    }
    return foundClient;
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    const foundClient = this.clientsRepository.update(id, updateClientDto);
    if (!foundClient) {
      throw new NotFoundException("Client not found");
    }
    return foundClient;
  }

  remove(id: string) {
    const foundClient = this.clientsRepository.delete(id);
    if (!foundClient) {
      throw new NotFoundException("Client not found");
    }
  }
}
