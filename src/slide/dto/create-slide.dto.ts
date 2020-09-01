import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from 'class-validator';

export class CreateSlideDto {

    @ApiProperty({type: Number, description: "id", required: false})
    @IsNumber()
    readonly id: number;

    @ApiProperty({type: String, description: "title", required: true})
    @IsString()
    readonly title: string;
    @ApiProperty({type: String, description: "title__en", required: true})
    @IsString()
    readonly title__en: string;
    @ApiProperty({type: String, description: "title__az", required: true})
    @IsString()
    readonly title__az: string;
    @ApiProperty({type: String, description: "title__de", required: true})
    @IsString()
    readonly title__de: string;


    @ApiProperty({type: String, description: "subtitle", required: true})
    @IsString()
    readonly subtitle: string;

    @ApiProperty({type: String, description: "subtitle__en", required: true})
    @IsString()
    readonly subtitle__en: string;

    @ApiProperty({type: String, description: "subtitle__az", required: true})
    @IsString()
    readonly subtitle__az: string;

    @ApiProperty({type: String, description: "subtitle__de", required: true})
    @IsString()
    readonly subtitle__de: string;

    @ApiProperty({type: String, description: "image_link", required: true})
    @IsString()
    readonly image_link: string;

    @ApiProperty({type: String, description: "image_alt", required: true})
    @IsString()
    readonly image_alt: string;

    @ApiProperty({type: String, description: "url", required: true})
    @IsString()
    readonly url: string;

    @ApiProperty({type: String, description: "type", required: true})
    @IsString()
    readonly type: string;

    @ApiProperty({type: Number, description: "aboutId", required: true})
    @IsNumber()
    readonly aboutId: number;
}