/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService) {
        super({
            usernameField: "email",
            userpasswordField: "password"
        })
    }

    validate(email: string, password: string){
        const foundUser = this.authService.validateUser(email, password)
        if(!foundUser){
            throw new UnauthorizedException()
        }
        return foundUser
    }
}