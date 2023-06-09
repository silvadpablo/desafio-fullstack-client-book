/* eslint-disable prettier/prettier */
import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';

export class User {
  id: string;
  name: string;
  email: string;

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
  }
}
