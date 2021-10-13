
import { Employee } from "src/employees/entities/employee.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class EmployeeStudy{ 

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    year: number;

    @Column()
    endeded: string;

}
