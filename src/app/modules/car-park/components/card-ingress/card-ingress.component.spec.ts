import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIngressComponent } from './card-ingress.component';

describe('CardIngressComponent', () => {
  let component: CardIngressComponent;
  let fixture: ComponentFixture<CardIngressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardIngressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIngressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
