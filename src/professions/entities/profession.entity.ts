
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Profession {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
}
