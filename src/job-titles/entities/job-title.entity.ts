
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class JobTitle {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
    
}
