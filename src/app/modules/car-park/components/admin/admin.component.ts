import {Location} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Car} from '../../models/car/car';
import {strings} from '../../../../components/string';
import {CarParkService} from '../../services/car-park.service';
import {closeModal, openModal} from "../../../../utils/utils";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  cont = 0;
  error: {};
  alegra: any;
  carList: Car[];
  created = false;
  submitted = false;
  registerForm: FormGroup;
  placeholder = strings.numberPosition;
  createCarPark = strings.createCarPark;
  administrate = strings.routes.urlAdmin;
  deleteParkingCar = strings.deleteParkingCar;
  required = 'Número ' + strings.require;
  minNumber = strings.minNumber;
  deleteComplete: any;
  labels = {
    accept: strings.aceppt,
    canceled: strings.canceled,
    title: strings.deleteParkingCar,
    body: strings.deleteParkingCarConfirm,
  };

  constructor(private formBuilder: FormBuilder, private carParkService: CarParkService, private location: Location) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      position: ['', [Validators.required, Validators.min(2)]],
    });

    this.carParkService.getCars().subscribe(
        (data: Car[]) => {
          this.carList = data;
          if (data) {
            for (const it of data ) {
                this.cont += 1;
            }
          }
        },
        error => this.error = error
    );
  }

  get f() {return this.registerForm.controls;}

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.carParkService.createPositions(this.registerForm.controls['position'].value).subscribe(
          (data: boolean ) => data ? location.reload() : null,
          error => this.error = error
      );
    }
  }
  deleteParking() {
openModal('idModalAdmin');
  }
  accept() {
    this.carParkService.deleteCarParking().subscribe(
        data => {
        closeModal('idModalAdmin'),
        location.reload();
        },
        error => this.error = error
    );
  }

}
