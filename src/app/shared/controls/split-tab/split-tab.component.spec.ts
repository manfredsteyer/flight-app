import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitTabComponent } from './split-tab.component';

describe('SplitTabComponent', () => {
  let component: SplitTabComponent;
  let fixture: ComponentFixture<SplitTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
