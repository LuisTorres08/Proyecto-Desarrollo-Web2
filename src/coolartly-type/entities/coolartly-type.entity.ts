
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CoolartlyType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;   
}

