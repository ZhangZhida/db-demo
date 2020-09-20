import { convertRRuleObjToRRuleStr, mapFreq, getLastInstance } from '../rruleHelper/rruleHelper';
import { createConnection } from "typeorm";
import { Event } from "../../entity/Event";
import { CreateEventDto } from "../dto/create-event.dto";
import { FindEventsDto } from "../dto/find-events.dto";

function parseEventObj(rawInput: any): any {
    const eventData = rawInput;
    const recurrenceData = eventData['recurrence_input'];

    // map freq 
    recurrenceData['freq'] = mapFreq(recurrenceData['freq'])

    // create date object
    recurrenceData['dtstart'] = new Date(recurrenceData['dtstart']);

    if ('until' in eventData['recurrence_input']) {
        recurrenceData['until'] = new Date(recurrenceData['until']);
    }

    if ('start_date' in eventData) {
        eventData['start_date'] = new Date(eventData['start_date']);
    }
    if ('end_date' in eventData) {
        eventData['end_date'] = new Date(eventData['end_date']);
    }
    if ('start_datetime' in eventData) {
        eventData['start_datetime'] = new Date(eventData['start_datetime']);
    }
    if ('end_datetime' in eventData) {
        eventData['end_datetime'] = new Date(eventData['end_datetime']);
    }

    // create default exdate value
    eventData['exdate'] = [];

    // after all above fields are done, generate recurrence_end_datetime field
    eventData['recurrence_end_datetime'] = getLastInstance(recurrenceData);

    // create rrule str
    eventData['rrule'] = convertRRuleObjToRRuleStr(recurrenceData);

    console.log('eventData =', eventData);
    return eventData;
}

export async function saveEventBo(createEventDto: CreateEventDto) {
    // create connection, get repository
    const connection = await createConnection();
    const eventRepository = connection.getRepository(Event);

    // operations on the database
    const eventData = parseEventObj(createEventDto);
    const event = await eventRepository.create(eventData);
    const result = await eventRepository.save(event);
    return result;
}

function getDateString(date: Date): string {
    const str = date.getFullYear().toString() + '-' + date.getMonth().toString() + '-' + date.getDate().toString();
    console.log('date str = ', str);
    return str;
}

export async function findEventsBo(findEventsDto: FindEventsDto) {
    // create connection, get repository
    const connection = await createConnection();
    const eventRepository = connection.getRepository(Event);

    const { calendarId, queryStartDatetime, queryEndDatetime } = findEventsDto;
    const queryStartDate = getDateString(new Date(queryStartDatetime));
    const queryEndDate = getDateString(new Date(queryEndDatetime));

    console.log('queryStartDate = ', queryStartDate, ', queryEndDate = ', queryEndDate);

    // query not-all-day events
    const notAllDayEvents = await eventRepository
        .createQueryBuilder('event')
        .where("event.isAllDay = :isAllDay \
                AND event.calendarId = :calendarId \
                AND event.start_datetime > :start \
                AND event.end_datetime < :end",
            {
                isAllDay: 0,
                calendarId: calendarId,
                start: queryStartDatetime,
                end: queryEndDatetime
            })
        .getMany();

    // query all-day events
    const allDayEvents = await eventRepository
        .createQueryBuilder('event')
        .where("event.isAllDay = :isAllDay \
                AND event.calendarId = :calendarId \
                AND event.start_date > :start \
                AND event.end_date < :end",
            {
                isAllDay: 1,
                calendarId: calendarId,
                start: queryStartDate,
                end: queryEndDate
            })
        .getMany();

    const events = [
        ...notAllDayEvents,
        ...allDayEvents
    ]

    return events;
}