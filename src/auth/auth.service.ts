import {Injectable,UnauthorizedException } from '@nestjs/common';
import {UsersService} from "../users/users.service";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {
    }

    async validateUser(data): Promise<any> {
        const user = await this.usersService.signIn(data);
        if (!user) {
            throw new UnauthorizedException();
        }
        return {
            access_token: this.jwtService.sign(data),
        }
    }

}
