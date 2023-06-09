import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contact.repository';

@Injectable()
export class ContactService {
  constructor(private contactsRepository: ContactsRepository) {}
  create(createcontactDto: CreateContactDto, clientId: string) {
    return this.contactsRepository.create(createcontactDto, clientId);
  }

  findAll(group: string | undefined) {
    return this.contactsRepository.findAll(group);
  }

  findOne(id: string) {
    const foundContact = this.contactsRepository.findOne(id);
    if (!foundContact) {
      throw new NotFoundException('Contact not found');
    }
    return foundContact;
  }

  update(id: string, updatecontactDto: UpdateContactDto) {
    const foundContact = this.contactsRepository.update(id, updatecontactDto);
    if (!foundContact) {
      throw new NotFoundException('Contact not found');
    }
    return foundContact;
  }

  remove(id: string) {
    const foundContact = this.contactsRepository.delete(id);
    if (!foundContact) {
      throw new NotFoundException('Contact not found');
    }
  }
}
