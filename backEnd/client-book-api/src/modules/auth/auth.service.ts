/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string) {
        const foundUser = await this.userService.findByEmail(email)
        if (foundUser){
            const passwordMatch = await compare(password, foundUser.password)
            if (passwordMatch){
                const { id, email } = foundUser
                return { id, email }
            }
        }
        return null
    }

    async login(email: string){
        const foundUser = await this.userService.findByEmail(email)
        return {
            token: this.jwtService.sign({ email }, {subject: foundUser.id}),
            foundUser
        }
    }
}
