import { Entity, Column, PrimaryGeneratedColumn, Generated } from "typeorm";

@Entity()
export class Event {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    calendarId: number;

    @Column()
    @Generated("uuid")
    uuid: string;

    @Column()
    category: string;

    @Column()
    title: string;

    @Column({
        nullable: true
    })
    description: string;

    @Column({
        nullable: true
    })
    location: string;

    @Column({
        type: "int"
    })
    isAllDay: number

    @Column({
        type: "date"
    })
    start_date: Date;

    @Column({
        type: "date"
    })
    end_date: Date;

    @Column({
        type: "datetime"
    })
    start_datetime: Date;

    @Column({
        type: "datetime"
    })
    end_datetime: Date;

    @Column({
        type: "datetime"
    })
    recurrence_end_datetime: Date;

    @Column()
    event_timezone: string;

    @Column({
        type: "text"
    })
    rrule: string;

    @Column("simple-array")
    exdate: string[];
}