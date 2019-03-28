import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOutComponent } from './modal-out.component';

describe('ModalOutComponent', () => {
  let component: ModalOutComponent;
  let fixture: ComponentFixture<ModalOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
