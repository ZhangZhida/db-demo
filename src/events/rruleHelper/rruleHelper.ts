import { RRule, RRuleSet, rrulestr } from 'rrule';

export function buildRRuleObj(input: any): any {

    let rruleObj = {};

    if (!('freq' in input)) {
        throw Error('freq is required.');
    }
    rruleObj['freq'] = input.freq;
    rruleObj['dtstart'] = input.dtstart;
    rruleObj['interval'] = input.interval;
    rruleObj['wkst'] = input.wkst;
    rruleObj['count'] = input.count;
    rruleObj['until'] = input.until;
    // ..... more to add on https://github.com/jakubroztocil/rrule#api
    // .....
    // .....

    return rruleObj;
}

const FREQ_MAP = {
    "YEARLY": RRule.YEARLY,
    "MONTHLY": RRule.MONTHLY,
    "WEEKLY": RRule.WEEKLY,
    "DAILY": RRule.DAILY,
    "HOURLY": RRule.HOURLY,
    "MINUTELY": RRule.MINUTELY,
    "SECONDLY": RRule.SECONDLY
}

export function mapFreq(inputFreq: string) {
    return FREQ_MAP[inputFreq];
}

export function convertRRuleObjToRRuleStr(rruleObj: any): string {
    const rule = new RRule(rruleObj);
    return rule.toString();
}

export function convertRRuleStrToRRuleObj(rruleStr: string): any {
    const rule = RRule.fromString(rruleStr);
    return rule.options;
}

export function getRRuleHandle(rruleObj: any): RRule {
    return new RRule(rruleObj);
}

export function getAllInstances(rruleObj: any): Date[] {
    const rule = new RRule(rruleObj);
    return rule.all();
}

export function getLastInstance(rruleObj: any): Date {
    const instances = getAllInstances(rruleObj);
    return instances[instances.length - 1];
}