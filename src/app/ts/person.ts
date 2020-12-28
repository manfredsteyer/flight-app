// src/app/ts/person.ts

export class Person {
    id = 0;
    firstName = '';
    lastName = '';

    fullName(): string {
        return this.firstName + ' '  + this.lastName;
    }
}

export class Passenger extends Person {
    passengerStatus = '';
}

export class Pilot extends Person {
    licenseNummber = '';
}
