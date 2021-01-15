import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { TableFieldDirective } from './table-field.directive';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterContentInit {

  @ContentChildren(TableFieldDirective)
  fields: QueryList<TableFieldDirective> | undefined;

  get fieldList() {
    return this.fields?.toArray();
  }

  @Input() data: Array<any> = [];

  constructor() { }


  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.debug('afterContent', this.fields?.toArray());
  }
}
