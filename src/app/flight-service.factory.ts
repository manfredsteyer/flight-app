// src/app/flight-service.factory.ts

import { HttpClient } from '@angular/common/http';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';

const DEBUG = false;

export const createFlightService = (http: HttpClient) => {
    if (!DEBUG) {
        return new DefaultFlightService(http);
    }
    else {
        return new DummyFlightService();
    }
};
