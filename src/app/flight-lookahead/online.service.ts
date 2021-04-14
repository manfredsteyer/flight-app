import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OnlineService {
  readonly online$ = interval(2000).pipe(
    startWith(0),
    map(_ => Math.random() < 0.5),
    distinctUntilChanged(),
    shareReplay({ bufferSize: 1, refCount: true })
  );
}
