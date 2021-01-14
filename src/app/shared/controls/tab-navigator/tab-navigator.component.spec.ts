import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNavigatorComponent } from './tab-navigator.component';

describe('TabNavigatorComponent', () => {
  let component: TabNavigatorComponent;
  let fixture: ComponentFixture<TabNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
