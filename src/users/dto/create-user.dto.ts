import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString,} from 'class-validator';


export class CreateUserDTO {
    @ApiProperty({type: Number, description: "id", required: true})
    @IsNumber()
    readonly id: number;

    @ApiProperty({type: String, description: "name", required: true})
    @IsString()
    readonly name: string;

    @ApiProperty({type: String, description: "password", required: true})
    @IsString()
    readonly password: string;

    @ApiProperty({type: String, description: "email", required: true})
    @IsString()
    readonly email: string;
}