
### GET /calendar/:calendar_id/event

Type `event_dto` 
```json
{
    "id": "j431lfjadl11dveokffa34314sg566",
    "calendar_id": "1234",
    "category_id": 2,
    "title": "Algorithm Class", 
    "description": "description on the algorithm",
    "organizer_id": "3643",
    "location": "MUDD 406",
    "is_all_day": 0,
    "start_date": "",
    "end_date": "",
    "start_datetime": "2020-09-25T14:00:00",
    "end_datetime": "2020-09-25T15:30:00",
    "recur_dict": {
        "freq": "WEEKLY", // options: YEARLY, MONTHLY, WEEKLY, DAILY
        "interval": 2, // 这里表示每2周
        // "count": 10, // 重复几次. count和until只能出现一个，也可以都不出现，比如大姨妈就没有重复结束的时间
        "until": "2020-12-21", // 重复截止日期
    },
    "attendees": "3643, 9135, 1042"  // a string concatnation of all attendees' id
}
```

return 
```json
{
    "2020-09-25": {
        "${zhidaUserId}": [
            ${event_dto_1},
            ${event_dto_2},
            ...
        ]
    }
}
```

### POST /calendar/:calendar_id/event

payload:
```json 
${event_dto}  // with no id
```

return:
```json
{
    "return_code": 200,
    "message": "create success",
    "data": {
        "id": "j431lfjadl11dveokffa34314sg566"
    }
}
```

### PUT /calendar/:calendar_id/event/:event_id

payload:
```json 
{
    "change_type": "this_and_following",  // options: this, this_and_following, all
    "event": ${event_dto}  // with no id
}

```

return:
```json
{
    "return_code": 200,
    "message": "create success",
    "data": {}
}
```

### DELETE /calendar/:calendar_id/event/:event_id

payload:
```json 
{
    "change_type": "this_and_following",  // options: this, this_and_following, all
}

```

return:
```json
{
    "return_code": 200,
    "message": "delete success",
    "data": {}
}
```

### PUT /calendar/:calendar_id/event/:event_id/attend

payload:
```json
{
    "user_id": "9135",
    "change_type": "this_and_following",  // options: this, this_and_following, all
}
```

return:
```json
{
    "return_code": 200,
    "message": "attend success",
    "data": {}
}
```

### DELETE /calendar/:calendar_id/event/:event_id/attend/:user_id

return:
```json
{
    "return_code": 200,
    "message": "attendee removed success",
    "data": {}
}
```