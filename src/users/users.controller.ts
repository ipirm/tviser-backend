import {Controller, Get, Param,Header, Post, Body, Query, Delete, Request, Patch} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDTO} from './dto/create-user.dto';
import {Pagination} from 'nestjs-typeorm-paginate';
import {UsersEntity} from "../model/users.entity";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
    }


    @Get()
    async getUsers(
        @Request() req,
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10
    ): Promise<any> {
        limit = limit > 100 ? 100 : limit;
        return this.usersService.getUsers({
            page,
            limit
        });
    }

    @Post('create')
    async signUp(@Request() req) {
        return this.usersService.signUp(req.body);
    }

    @Get(':id')
    async getUser(@Param('id') id) {
        const user = await this.usersService.findOne(id);
        return user;
    }

    @Patch('update')
    async updateUser(@Request() req) {
        return this.usersService.updateUser(req.body);
    }
    @Delete(':id')
    async deleteUser(@Param('id') id) {
        const users = await this.usersService.remove(id);
        return users;
    }
}
