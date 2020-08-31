import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from 'class-validator';


export class CreateBannerDTO {
    @ApiProperty({type: Number, description: "id", required: true})
    @IsNumber()
    readonly id: number;

    @ApiProperty({type: String, description: "name", required: true})
    @IsString()
    readonly name: string;

    @ApiProperty({type: String, description: "link", required: true})
    @IsString()
    readonly link: string;

    @ApiProperty({type: String, description: "alt", required: true})
    @IsString()
    readonly alt: string;
}