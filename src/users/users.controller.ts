import {
    Controller,
    Get,
    Param,
    Post,
    Query,
    Delete,
    Request,
    Patch,
    HttpException,
    HttpStatus
} from '@nestjs/common';
import {UsersService} from './users.service';

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
        if (req.header('Content-Type')=== 'application/json'){
            limit = limit > 100 ? 100 : limit;
            return this.usersService.getUsers({
                page,
                limit
            });
        } else {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }

    @Post('create')
    async signUp(@Request() req) {
        return this.usersService.signUp(req.body);
    }

    @Get(':id')
    async getUser(@Request() req,@Param('id') id) {
        if (req.header('Content-Type')=== 'application/json'){
            const user = await this.usersService.findOne(id);
            return user;
        }else{
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
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
