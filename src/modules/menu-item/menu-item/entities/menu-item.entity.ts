import { Expose } from "class-transformer";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { menuItemTypes } from "../menu-item.taxonomy";

@Entity()
export class MenuItem extends BaseEntity{
    @Expose()
    @PrimaryGeneratedColumn()
    id: number;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    name: string;

    @Column({
        type: 'enum',
        enum: menuItemTypes,
    })
    type: menuItemTypes;

    @Column({ nullable: true })
    description: string;
}