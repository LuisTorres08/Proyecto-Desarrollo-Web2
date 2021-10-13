
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Institution {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;   
}
