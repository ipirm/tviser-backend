import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {UsersEntity} from "../model/users.entity";
import {CreateUserDTO} from "./dto/create-user.dto";
import * as bcrypt from 'bcrypt';
import * as _ from "lodash";
import {paginate} from 'nestjs-typeorm-paginate';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UsersEntity) private readonly users: Repository<UsersEntity>) {
    }

    public async getUsers({page, limit}) {
        const queryBuilder = this.users.createQueryBuilder('c');
        // queryBuilder.orderBy('c.name', 'DESC');
        return paginate<UsersEntity>(queryBuilder, {page, limit});
    }

    public async findOne(id: string): Promise<any> {
        return this.users.findOne(id);
    }

    public async remove(id: string): Promise<void> {
        await this.users.delete(id);
    }

    public async updateUser(createUserDTO: CreateUserDTO): Promise<any> {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(createUserDTO.password, salt)
        this.users.create(_.assignIn(createUserDTO, {password: hash}));
        const id = createUserDTO.id;
        return await this.users.save({...createUserDTO, id});
    }

    public async signUp(createUserDto: CreateUserDTO): Promise<any> {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(createUserDto.password, salt)
        const user = this.users.create(_.assignIn(createUserDto, {password: hash}));
        await this.users.save(createUserDto);
        return user;
    }

    public async signIn(data): Promise<any> {
        const user = await this.users.findOne({email: data.email});
        if (!user) {
            return null;
        }
        const valid = await bcrypt.compare(data.password, user.password);
        return valid ? user : null;
    }
}