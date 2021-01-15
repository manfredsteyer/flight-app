import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/flight-booking/flight';
import { DemoDialogComponent } from 'src/app/shared/controls/dialog/demo-dialog/demo-dialog.component';
import { DialogService } from 'src/app/shared/controls/dialog/dialog.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {

  flights: Flight[] = [
    { id: 1, from: 'Hamburg', to: 'Berlin', date: '2025-02-01T17:00+01:00' },
    { id: 2, from: 'Hamburg', to: 'Frankfurt', date: '2025-02-01T17:30+01:00' },
    { id: 3, from: 'Hamburg', to: 'Mallorca', date: '2025-02-01T17:45+01:00' }
  ];

  rnd = Math.random() < 0.5;

  constructor(private dialogService: DialogService) {
  }

  ngOnInit(): void {
  }

  showDialog(): void {
    this.dialogService.show(DemoDialogComponent, 'Hallo Welt!');
  }

  delete(): void {
    console.debug('delete ...');
  }

}
