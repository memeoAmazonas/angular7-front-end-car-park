import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsActuallyCarComponent } from './statistics-actually-car.component';

describe('StatisticsActuallyCarComponent', () => {
  let component: StatisticsActuallyCarComponent;
  let fixture: ComponentFixture<StatisticsActuallyCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsActuallyCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsActuallyCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
