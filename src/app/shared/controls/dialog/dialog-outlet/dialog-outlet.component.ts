import { Component, Injector, OnInit, Type } from '@angular/core';
import { DialogService } from '../dialog.service';
import { DIALOG_DATA } from '../dialog.token';

@Component({
  selector: 'app-dialog-outlet',
  templateUrl: './dialog-outlet.component.html',
  styleUrls: ['./dialog-outlet.component.scss']
})
export class DialogOutletComponent implements OnInit {

  injector: Injector | null = null;
  comp: Type<any> | null = null;

  constructor(
    private dialogService: DialogService,
    private parentInjector: Injector,
    ) { }

  ngOnInit(): void {

    this.dialogService.dialogInfo.subscribe(info => {
      this.comp = info.component;
      this.injector = Injector.create({
        providers: [
          { provide: DIALOG_DATA, useValue: info.data }
        ],
        parent: this.parentInjector
      });
    });

  }




}
