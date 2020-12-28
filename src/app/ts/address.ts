// src/app/ts/address.ts

export abstract class AbstractAddress {
    id = 0;
    street = '';
    zipCode = '';
    city = '';

    constructor(id: number) {
        this.id = id;
    }

    fullAddress(): string {
        return this.street +  ', ' + this.zipCode + ' ' +  this.city;
    }

    abstract toCSV(): string;
}
