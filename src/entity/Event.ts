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
        type: "date",
        nullable: true
    })
    start_date: Date;

    @Column({
        type: "date",
        nullable: true
    })
    end_date: Date;

    @Column({
        type: "datetime",
        nullable: true
    })
    start_datetime: Date;

    @Column({
        type: "datetime",
        nullable: true
    })
    end_datetime: Date;

    @Column({
        type: "datetime",
        nullable: true
    })
    recurrence_end_datetime: Date;

    @Column()
    event_timezone: string;

    @Column({
        type: "text"
    })
    rrule: string;

    @Column("simple-array")
    exdate: string[]
}