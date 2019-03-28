import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Car} from '../../models/car/car';
import {openModal} from '../../../../utils/utils';
import {strings} from '../../../../components/string';
import {CarParkService} from '../../services/car-park.service';

@Component({
  selector: 'app-register-car-out',
  templateUrl: './car-register-out.component.html',
  styleUrls: ['./car-register-out.component.css']
})
export class CarRegisterOutComponent implements OnInit {
  car: Car;
  submitted = false;
  idModal = 'idModal';
  registerForm: FormGroup;
  labels = {
    find: strings.find,
    licencePlate: strings.car.licencePlate,
    require: strings.require,
    exitCar: strings.exitCar,
    placeholder: strings.ingressLicencePlate
  };

  constructor(private formBuilder: FormBuilder, private carParkService: CarParkService) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      licencePlate: ['', Validators.required],
    });
  }

  get f() { return this.registerForm.controls; }
  onSubmit(id: string) {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.carParkService.getCarByLicencePlate_(this.registerForm.controls['licencePlate'].value)
        .subscribe(car => {
            this.car = car;
          }
        );
      openModal(id);
    }
  }
}
