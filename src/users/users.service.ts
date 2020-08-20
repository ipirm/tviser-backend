import { Injectable } from '@nestjs/common';
import { USERS } from '../mocks/users.mock';

@Injectable()
export class UsersService {
    users = USERS;

    getUsers(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.users);
        });
    }

    getUser(userID): Promise<any> {
        let id = Number(userID);
        return new Promise(resolve => {
            const book = this.users.find(user => user.id === id);
            if (!book) {
                // throw new HttpException('Book does not exist!', 404);
            }
            resolve(book);
        });
    }

    addUser(user): Promise<any> {
        return new Promise(resolve => {
            this.users.push(user);
            resolve(this.users);
        });
    }
    deleteUser(userID): Promise<any> {
        let id = Number(userID);
        return new Promise(resolve => {
            let index = this.users.findIndex(user => user.id === id);
            if (index === -1) {
                // throw new HttpException('Book does not exist!', 404);
            }
            this.users.splice(1, index);
            resolve(this.users);
        });
    }
}