import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerSearchComponent } from './passenger-search.component';

describe('PassengerSearchComponent', () => {
  let component: PassengerSearchComponent;
  let fixture: ComponentFixture<PassengerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
