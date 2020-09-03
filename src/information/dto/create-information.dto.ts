import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from 'class-validator';

export class CreateInformationDto {
    @ApiProperty({type: Number, description: "id", required: true})
    @IsNumber()
    readonly id: number;

    @ApiProperty({type: String, description: "facebook_link", required: true})
    @IsString()
    readonly facebook_link: string;

    @ApiProperty({type: String, description: "facebook_link", required: true})
    @IsString()
    readonly instagram_link: string;

    @ApiProperty({type: String, description: "facebook_link", required: true})
    @IsString()
    readonly behance_link: string;

    @ApiProperty({type: String, description: "facebook_link", required: true})
    @IsString()
    readonly telegram_link: string;

    @ApiProperty({type: String, description: "facebook_link", required: true})
    @IsString()
    readonly phone_number: string;

    @ApiProperty({type: String, description: "facebook_link", required: true})
    @IsString()
    readonly email: string;

    @ApiProperty({type: String, description: "facebook_link", required: true})
    @IsString()
    readonly address: string;

    @ApiProperty({type: String, description: "menu_title", required: true})
    @IsString()
    readonly menu_title: string;
    @ApiProperty({type: String, description: "menu_title__en", required: true})
    @IsString()
    readonly menu_title__en: string;
    @ApiProperty({type: String, description: "menu_title__az", required: true})
    @IsString()
    readonly menu_title__az: string;
    @ApiProperty({type: String, description: "menu_title__de", required: true})
    @IsString()
    readonly menu_title__de: string;


    @ApiProperty({type: String, description: "menu_subtitle", required: true})
    @IsString()
    readonly menu_subtitle: string;
    @ApiProperty({type: String, description: "menu_subtitle__en", required: true})
    @IsString()
    readonly menu_subtitle__en: string;
    @ApiProperty({type: String, description: "menu_subtitle__az", required: true})
    @IsString()
    readonly menu_subtitle__az: string;
    @ApiProperty({type: String, description: "menu_subtitle__de", required: true})
    @IsString()
    readonly menu_subtitle__de: string;
}