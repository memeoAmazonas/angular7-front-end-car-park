import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Car} from '../../../models/car/car';
import {strings} from '../../../../../components/string';
import {closeModal, openModal} from '../../../../../utils/utils';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  car: Car;
  submitted = false;
  registerForm: FormGroup;
  labels = {
    canceled: strings.canceled,
    title: strings.register,
    model: strings.car.model,
    require: strings.require,
    register: strings.register,
    licencePlate: strings.car.licencePlate,
  };

  constructor( private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      licencePlate: ['', Validators.required],
      model: ['', Validators.required]
    });
    this.setValues();
  }

  get f() { return this.registerForm.controls; }

  setValues() {
    this.registerForm.controls['licencePlate'].setValue('');
    this.registerForm.controls['model'].setValue('');
  }

  close(id: string) {
    closeModal(id);
  }

  open(id: string) {
    openModal(id);
  }

  onSubmit(id: string) {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.close(id);
      const position = -1;
      this.car = new Car(
        position,
        false,
        this.registerForm.controls['licencePlate'].value,
        this.registerForm.controls['model'].value,
        position,
        new Date(), null);

      this.open('registerSuccess');
    }

  }

}
