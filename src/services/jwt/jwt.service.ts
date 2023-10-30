import { Injectable } from '@nestjs/common';
import * as jwt from "jsonwebtoken";

@Injectable()
export class JwtService {
    async createJWT(email: string, id: number): Promise<string> {
        return await jwt.sign({ email, id }, process.env.JWT_SECRET, { expiresIn: "5m" });
    }

    async verifyJwt(token: string): Promise<any> {
        return await jwt.verify(token, process.env.JWT_SECRET);
    }

    async createResetPasswordJWT(email: string): Promise<string> {
        return await jwt.sign({ email }, process.env.JWT_RESET_PASSWORD, { expiresIn: "5m" });
    }

    async verifyResetPasswordJWT(token: string): Promise<any> {
        return await jwt.verify(token, process.env.JWT_RESET_PASSWORD);
    }
}
