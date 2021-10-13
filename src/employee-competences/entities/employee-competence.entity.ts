
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class EmployeeCompetence {

    @PrimaryGeneratedColumn()
    id: number;
    
}



