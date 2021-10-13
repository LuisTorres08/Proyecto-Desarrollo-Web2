
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class  WorkRecord {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    begin_date: string;

    @Column()
    end_date: string;

    @Column()
    company_name: string;

    @Column()
    boss_name: string;

    @Column()
    phone_company: number;
    
}




