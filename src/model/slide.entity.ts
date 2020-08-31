import {Entity, Column, ManyToOne} from 'typeorm'
import {BaseEntity} from "./base.entity";
import {I18nColumn} from "typeorm-i18n";
import {DefaultLocale, SupportedLocales} from "../locale/locale";
import {AboutEntity} from "./about.entity";

@Entity('slide')

export abstract class SlideEntity extends BaseEntity {
    @I18nColumn({
        default_language: DefaultLocale,
        languages: SupportedLocales,
    })
    @Column({type: 'varchar', length: 1500, nullable: false})
    title: string;
    @I18nColumn({
        default_language: DefaultLocale,
        languages: SupportedLocales,
    })
    @Column({type: 'varchar', length: 1500, nullable: false})
    subtitle: string;
    @Column({type: 'varchar', length: 1500, nullable: false})
    image_link: string;
    @Column({type: 'varchar', length: 1500, nullable: false})
    image_alt: string;
    @Column({type: 'varchar', length: 1500, nullable: false})
    url: string;

    @ManyToOne(type => AboutEntity, about => about.slides)
    about: AboutEntity
}