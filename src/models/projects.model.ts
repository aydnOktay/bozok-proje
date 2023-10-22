import { Column, Entity, JoinColumn, OneToOne,ManyToOne, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Model } from 'objection';
import { Visibility } from "src/common";
import { User } from "./user.model";


@Entity({ name: "projects" })
export class Projects extends Model {

    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number;

    @Column()
    project_title: string;

    @Column()
    project_description: string;

    @Column()
    @ManyToOne(type => User, { eager: true })
    @JoinColumn({ name: "project_admin", referencedColumnName: "id" })
    project_admin:User;

    @Column()
    visibility: Visibility;

    // @Column()
    // @ManyToMany(type => User, { eager: true }) // Bir projenin birden çok üyesi (users) olabilir
    // @JoinTable() 
    // project_members:User[];

}