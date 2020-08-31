import { Controller, Request, Post, UseGuards,Get,Body } from '@nestjs/common';

import {AuthService} from "./auth.service";
import { JwtAuthGuard } from './jwt-auth.guard';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    // @UseGuards(AuthGuard('local'))

    @Post('login')
    async login(@Request() req) {
        return this.authService.validateUser(req.body);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
