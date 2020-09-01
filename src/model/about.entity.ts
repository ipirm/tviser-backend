import {Entity, Column,OneToMany} from 'typeorm'
import {BaseEntity} from "./base.entity";
import {I18nColumn} from "typeorm-i18n";
import {DefaultLocale, SupportedLocales} from "../locale/locale";
import {SlideEntity} from "./slide.entity";

@Entity('abouts')

export  class AboutEntity extends BaseEntity {
    @I18nColumn({
        default_language: DefaultLocale,
        languages: SupportedLocales,
    })
    @Column({type: 'varchar', length: 1500, nullable: false})
    meta_title: string;

    @I18nColumn({
        default_language: DefaultLocale,
        languages: SupportedLocales,
    })
    @Column({type: 'varchar', length: 1500, nullable: false})
    meta_subtitle: string;


    @I18nColumn({
        default_language: DefaultLocale,
        languages: SupportedLocales,
    })
    @Column({type: 'varchar', length: 1500, nullable: false})
    meta_keywords: string;


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

    @OneToMany(type => SlideEntity, slide => slide.about,{ cascade: true})
    slides: SlideEntity[];
}