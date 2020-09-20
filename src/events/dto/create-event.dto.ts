export class CreateEventDto {
    // id: number;
    calendarId: number;
    // uuid: string;
    category: string;
    title: string;
    description: string = "";
    location: string = "";
    isAllDay: number
    start_date: Date;
    end_date: Date;
    start_datetime: Date;
    end_datetime: Date;
    event_timezone: string;
    recurrence_input: any;

    print() {
        console.log(
            '\ncalendarId = ', this.calendarId,
            '\ncategory = ', this.category,
            '\ntitle = ', this.title,
            '\ndescription = ', this.description,
            '\nlocation = ', this.location,
            '\nisAllDay = ', this.isAllDay,
            '\nstart_date = ', this.start_date,
            '\nend_date = ', this.end_date,
            '\nstart_datetime = ', this.start_datetime,
            '\nend_datetime = ', this.end_datetime,
            '\nevent_timezone = ', this.event_timezone,
            '\nrecurrence_input', this.recurrence_input
        )
    }

    // constructor(
    //     calendarId: number, uuid: string, category: string, title: string,
    //     description: string, location: string, isAllDay: number, start_date: Date,
    //     end_date: Date, start_datetime: Date, end_datetime: Date,
    //     recurrence_end_datetime: Date, event_timezone: string, rrule: string,
    //     exdate: string[]
    // ) {
    //     this.calendarId = calendarId;
    //     this.uuid = uuid;
    //     this.category = category;
    //     this.title = title;
    //     this.description = description;
    //     this.location = location;
    //     this.isAllDay = isAllDay;
    //     this.start_date = start_date;
    //     this.end_date = end_date;
    //     this.start_datetime = start_datetime;
    //     this.end_datetime = end_datetime;
    //     this.recurrence_end_datetime = recurrence_end_datetime;
    //     this.event_timezone = event_timezone;
    //     this.rrule = rrule;
    //     this.exdate = exdate;
    // }
}