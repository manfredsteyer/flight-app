// src/app/default-flight.service.ts

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight';
import { FlightService } from './flight.service';
import { BASE_URL } from './tokens';

@Injectable({
  providedIn: 'root'
})
export class DefaultFlightService implements FlightService {

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string,
  ) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = this.baseUrl + 'flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    return this.http.get<Flight[]>(url, {headers, params});
  }
}
