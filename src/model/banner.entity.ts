import {Entity, Column} from 'typeorm'
import {BaseEntity} from "./base.entity";

@Entity('banners')

export abstract class BannersEntity extends BaseEntity {
    @Column({type: 'varchar', length: 1500, nullable: false})
    name: string;
    @Column({type: 'varchar', length: 1500, nullable: false})
    link: string;
    @Column({type: 'varchar', length: 1500, nullable: false})
    alt: string;
}