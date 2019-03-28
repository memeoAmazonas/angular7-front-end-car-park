import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsMostVisitedComponent } from './statistics-most-visited.component';

describe('StatisticsMostVisitedComponent', () => {
  let component: StatisticsMostVisitedComponent;
  let fixture: ComponentFixture<StatisticsMostVisitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsMostVisitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsMostVisitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
