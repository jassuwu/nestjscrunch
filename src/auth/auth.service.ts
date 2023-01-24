import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    login() {
        return { message: `LOGGED IN`, error: false };
    }
    register() {
        return { message: `REGISTRATION TIME`, error: false };
    }
}