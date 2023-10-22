import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Model } from 'objection';
import { StatusType } from "src/common";


@Entity({ name: "users" })
export class User extends Model {

    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number;

    @Column()
    fullName: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    active: boolean;

}