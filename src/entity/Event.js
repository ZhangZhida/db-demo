"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
var typeorm_1 = require("typeorm");
var Event = /** @class */ (function () {
    function Event() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Event.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Event.prototype, "calendarId", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.Generated("uuid"),
        __metadata("design:type", String)
    ], Event.prototype, "uuid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Event.prototype, "category", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Event.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], Event.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], Event.prototype, "location", void 0);
    __decorate([
        typeorm_1.Column({
            type: "int"
        }),
        __metadata("design:type", Number)
    ], Event.prototype, "isAllDay", void 0);
    __decorate([
        typeorm_1.Column({
            type: "date"
        }),
        __metadata("design:type", Date)
    ], Event.prototype, "start_date", void 0);
    __decorate([
        typeorm_1.Column({
            type: "date"
        }),
        __metadata("design:type", Date)
    ], Event.prototype, "end_date", void 0);
    __decorate([
        typeorm_1.Column({
            type: "datetime"
        }),
        __metadata("design:type", Date)
    ], Event.prototype, "start_datetime", void 0);
    __decorate([
        typeorm_1.Column({
            type: "datetime"
        }),
        __metadata("design:type", Date)
    ], Event.prototype, "end_datetime", void 0);
    __decorate([
        typeorm_1.Column({
            type: "datetime"
        }),
        __metadata("design:type", Date)
    ], Event.prototype, "recurrence_end_datetime", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Event.prototype, "event_timezone", void 0);
    __decorate([
        typeorm_1.Column({
            type: "text"
        }),
        __metadata("design:type", String)
    ], Event.prototype, "rrule", void 0);
    __decorate([
        typeorm_1.Column("simple-array"),
        __metadata("design:type", Array)
    ], Event.prototype, "exdate", void 0);
    Event = __decorate([
        typeorm_1.Entity()
    ], Event);
    return Event;
}());
exports.Event = Event;
