import { Component, OnInit } from '@angular/core';
import { DemoDialogComponent } from './shared/controls/dialog/demo-dialog/demo-dialog.component';
import { DialogService } from './shared/controls/dialog/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World!';

}
