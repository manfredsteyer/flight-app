import { AfterContentInit, AfterViewInit, Component, ContentChildren, OnInit, QueryList, ViewChild } from '@angular/core';
import { TabNavigatorComponent } from '../tab-navigator/tab-navigator.component';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.scss']
})
export class TabbedPaneComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ContentChildren(TabComponent)
  tabQueryList: QueryList<TabComponent> | undefined;

  @ViewChild('navigator')
  navigator: TabNavigatorComponent | undefined;

  activeTab: TabComponent | undefined;
  currentPage = 0;

  get tabs(): TabComponent[] {
    return this.tabQueryList?.toArray() ?? [];
  }

  constructor() {
  }

  ngAfterViewInit(): void {
    if (this.navigator) {
      this.navigator.pageCount = this.tabs.length;
      // this.navigator.page = 1;
      this.navigator.pageChange.subscribe((page: number) => {
        this.pageChange(page);
      });
    }
  }

  ngAfterContentInit(): void {
    if (this.tabs.length > 0) {
      this.activate(this.tabs[0]);
    }
  }

  ngOnInit(): void {
  }

  activate(active: TabComponent): void {
    for (const tab of this.tabs) {
      tab.visible = (tab === active);
    }
    this.activeTab = active;
    this.currentPage = this.tabs.indexOf(active) + 1;
  }

  pageChange(page: number): void {
    this.activate(this.tabs[page-1]);
  }

}
