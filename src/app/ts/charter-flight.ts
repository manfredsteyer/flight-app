import { Flight } from '../flight';

export class CharterFlight implements Flight {

    id = 0;
    from = '';
    to = '';
    date = '';

    distance = 0;

    calcPrice(): number {
        return this.distance / 2;
    }
}
