import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from 'class-validator';

export class CreateAboutDto {
    @ApiProperty({type: Number, description: "id", required: true})
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


    @ApiProperty({type: String, description: "meta_title", required: true})
    @IsString()
    readonly meta_title: string;
    @ApiProperty({type: String, description: "meta_title__en", required: true})
    @IsString()
    readonly meta_title__en: string;
    @ApiProperty({type: String, description: "meta_title__az", required: true})
    @IsString()
    readonly meta_title__az: string;
    @ApiProperty({type: String, description: "meta_title__de", required: true})
    @IsString()
    readonly meta_title__de: string;


    @ApiProperty({type: String, description: "meta_subtitle", required: true})
    @IsString()
    readonly meta_subtitle: string;
    @ApiProperty({type: String, description: "meta_subtitle__en", required: true})
    @IsString()
    readonly meta_subtitle__en: string;
    @ApiProperty({type: String, description: "meta_subtitle__az", required: true})
    @IsString()
    readonly meta_subtitle__az: string;
    @ApiProperty({type: String, description: "meta_subtitle__de", required: true})
    @IsString()
    readonly meta_subtitle__de: string;


    @ApiProperty({type: String, description: "meta_keywords", required: true})
    @IsString()
    readonly meta_keywords: string;
    @ApiProperty({type: String, description: "meta_keywords__en", required: true})
    @IsString()
    readonly meta_keywords__en: string;
    @ApiProperty({type: String, description: "meta_keywords__az", required: true})
    @IsString()
    readonly meta_keywords__az: string;
    @ApiProperty({type: String, description: "meta_keywords__de", required: true})
    @IsString()
    readonly meta_keywords__de: string;


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

    @ApiProperty({type: Array, description: "slides", required: true})
    @IsString()
    readonly slides: any;
}