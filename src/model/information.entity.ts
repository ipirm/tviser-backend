import {Entity, Column} from 'typeorm'
import {BaseEntity} from "./base.entity";
import {I18nColumn} from "typeorm-i18n";
import {DefaultLocale, SupportedLocales} from "../locale/locale";

@Entity('informations')


export  class InformationEntity extends BaseEntity {

    @Column({type: 'varchar', length: 1500, nullable: false})
    facebook_link: string;
    @Column({type: 'varchar', length: 1500, nullable: false})
    instagram_link: string;
    @Column({type: 'varchar', length: 1500, nullable: false})
    behance_link: string;
    @Column({type: 'varchar', length: 1500, nullable: false})
    telegram_link: string;
    @Column({type: 'varchar', length: 1500, nullable: false})
    phone_number: string;
    @Column({type: 'varchar', length: 1500, nullable: false})
    email: string;

    @I18nColumn({
        default_language: DefaultLocale,
        languages: SupportedLocales,
    })
    @Column({type: 'varchar', length: 1500, nullable: false})
    address: string;

    @I18nColumn({
        default_language: DefaultLocale,
        languages: SupportedLocales,
    })
    @Column({type: 'varchar', length: 1500, nullable: false})
    menu_title: string;

    @I18nColumn({
        default_language: DefaultLocale,
        languages: SupportedLocales,
    })
    @Column({type: 'varchar', length: 1500, nullable: false})
    menu_subtitle: string;

}
