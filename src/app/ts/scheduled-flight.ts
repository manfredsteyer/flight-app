// src/app/ts/scheduled-flight.ts

import { Flight } from "../flight";

export class ScheduledFlight implements Flight {

    id: number = 0;
    from: string = '';
    to: string = '';
    date: string = '';

    distance: number = 0;

    get unixDate() {
        return new Date(this.date).getTime();
    }

    set unixDate(time: number) {
        let date = new Date(time);
        this.date = date.toISOString();
    }

    calcPrice() {
        return this.distance / 3;
    }

}