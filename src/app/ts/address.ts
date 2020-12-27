// src/app/ts/address.ts

export abstract class AbstractAddress {
    id: number = 0;
    street: string = '';
    zipCode: string = '';
    city: string = '';

    constructor(id: number) {
        this.id = id;
    }

    fullAddress() {
        return this.street +  ", " + this.zipCode + " " +  this.city;
    }

    abstract toCSV(): string;
}