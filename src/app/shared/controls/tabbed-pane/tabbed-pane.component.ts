// src/app/shared/controls/tabbed-pane/tabbed-pane.component.ts

import { AfterContentInit, AfterViewInit, Component, ContentChildren, OnInit, QueryList, ViewChild } from '@angular/core';
import { TabNavigatorComponent } from '../tab-navigator/tab-navigator.component';
import { TabComponent } from '../tab/tab.component';

// Import hinzufügen
import { TabbedPaneService } from './tabbed-pane.service';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.scss'],

  // Provier hinzufügen:
  viewProviders: [TabbedPaneService]
})
export class TabbedPaneComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ContentChildren(TabComponent)
  tabQueryList: QueryList<TabComponent> | undefined;

  activeTab: TabComponent | undefined;
  currentPage = 0;

  get tabs(): TabComponent[] {
    return this.tabQueryList?.toArray() ?? [];
  }

  constructor(private service: TabbedPaneService) {
  }

  // Diese Methode aktualisieren
  ngAfterViewInit(): void {
      this.service.pageCount.next(this.tabs.length);
      this.service.currentPage.subscribe((page: number) => {
        if (page === this.currentPage) {
          return;
        }
        this.pageChange(page);
      });
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
    // Aktualisieren:
    this.currentPage = this.tabs.indexOf(active) + 1;
    this.service.currentPage.next(this.currentPage);
  }

  pageChange(page: number): void {
    this.activate(this.tabs[page - 1]);
  }

}
