import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  HttpCode,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { JWTAuthGuard } from '../auth/jwt.auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Contacts')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post(':id')
  @ApiBearerAuth()
  @UseGuards(JWTAuthGuard)
  create(
    @Body() createContactDto: CreateContactDto,
    @Param('id') clientId: string,
  ) {
    return this.contactService.create(createContactDto, clientId);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  @ApiBearerAuth()
  @UseGuards(JWTAuthGuard)
  findAll(@Query('group') group: string | undefined) {
    return this.contactService.findAll(group);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JWTAuthGuard)
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JWTAuthGuard)
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactService.update(id, updateContactDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(204)
  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JWTAuthGuard)
  remove(@Param('id') id: string) {
    return this.contactService.remove(id);
  }
}
