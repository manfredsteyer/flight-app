import { Component, Injector, OnInit, Type } from '@angular/core';
import { DialogService, DIALOG_DATA } from '../dialog.service';

@Component({
  selector: 'app-dialog-outlet',
  templateUrl: './dialog-outlet.component.html',
  styleUrls: ['./dialog-outlet.component.scss']
})
export class DialogOutletComponent implements OnInit {

  constructor(
    private dialogService: DialogService,
    private parentInjector: Injector,
    ) { }

  injector: Injector | null = null;
  comp: Type<any> | null = null;

  ngOnInit(): void {
    this.dialogService.componentToShow.subscribe(comp => {
      this.comp = comp;
    });

    this.dialogService.data.subscribe(data => {
      this.injector = Injector.create({
        providers: [
          { provide: DIALOG_DATA, useValue: data }
        ],
        parent: this.parentInjector
      });
    });

  }




}
