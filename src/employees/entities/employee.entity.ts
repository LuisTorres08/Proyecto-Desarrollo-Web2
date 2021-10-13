import { User } from "src/users/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Employee extends User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

}
    