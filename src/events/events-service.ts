import * as data from '../data.json';

import { CreateEventDto } from "./dto/create-event.dto";
import { FindEventsDto } from "./dto/find-events.dto";
import { saveEventBo, findEventsBo } from './bo/eventBo';


export async function createEvent(createEventDto: CreateEventDto) {
    console.log('raw event input = ', createEventDto);

    const result = await saveEventBo(createEventDto);
    console.log('create result = ', result);
}

export async function findEvents(findEventDto: FindEventsDto) {
    const events = await findEventsBo(findEventDto);
    console.log('find events = ', events);
}


/////// test / ////////

// data.forEach((rawEvent) => {
//     let createEventDto = new CreateEventDto();
//     Object.assign(createEventDto, rawEvent);
//     createEvent(createEventDto);
// })


const findEventDto = new FindEventsDto();
findEventDto.calendarId = 1000;
findEventDto.queryStartDatetime = "2020-09-01T00:00:00";
findEventDto.queryEndDatetime = "2020-09-30T23:59:59";
findEvents(findEventDto);