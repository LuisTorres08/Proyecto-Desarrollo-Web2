
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Competence {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
    
}
