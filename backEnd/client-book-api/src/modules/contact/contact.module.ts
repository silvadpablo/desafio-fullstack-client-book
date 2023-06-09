import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ContactsRepository } from './repositories/contact.repository';
import { ContactsPrismaRepository } from './repositories/prisma/contacts.prisma.repository';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule],
  controllers: [ContactController],
  providers: [
    ContactService,
    PrismaService,
    { provide: ContactsRepository, useClass: ContactsPrismaRepository },
  ],
})
export class ContactModule {}
