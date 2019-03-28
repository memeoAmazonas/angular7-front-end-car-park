import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRegisterOutComponent } from './car-register-out.component';

describe('CarRegisterOutComponent', () => {
  let component: CarRegisterOutComponent;
  let fixture: ComponentFixture<CarRegisterOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRegisterOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRegisterOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
