// src/app/ts/company-address.ts

import { AbstractAddress } from './address';

export class CompanyAddress extends AbstractAddress {
    companyName = '';

    toCSV(): string {
        return `${this.id};${this.companyName};${this.street};${this.zipCode};${this.city}`;
    }
}
