import * as data from '../data.json';

import { convertRRuleObjToRRuleStr, mapFreq, getLastInstance } from './rruleHelper/rruleHelper';
import { createConnection } from "typeorm";
import { Event } from "../entity/Event";
import { CreateEventDto } from "./dto/create-event.dto";


function createEventObj(rawInput: any): any {
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

export async function create(rawEvent: CreateEventDto) {
    console.log('raw event input = ', rawEvent);

    // create connection, get repository
    const connection = await createConnection();
    const eventRepository = connection.getRepository(Event);

    // operations on the database
    const eventData = createEventObj(rawEvent);
    const event = await eventRepository.create(eventData);
    const result = await eventRepository.save(event);
    console.log('create result = ', result);
}


data.forEach((rawEvent) => {
    let createEventDto = new CreateEventDto();
    Object.assign(createEventDto, rawEvent);
    create(createEventDto);
})