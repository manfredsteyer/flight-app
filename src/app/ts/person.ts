// src/app/ts/person.ts

export class Person {
    id: number = 0;
    firstName: string = '';
    lastName: string = '';

    fullName() {
        return this.firstName + " "  + this.lastName;
    }
}

export class Passenger extends Person { 
    passengerStatus: string = '';
} 
     
export class Pilot extends Person { 
    licenseNummber: string = ''; 
}