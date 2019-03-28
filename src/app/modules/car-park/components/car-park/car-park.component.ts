import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import {Car} from '../../models/car/car';
import {strings} from '../../../../components/string';
import {CarParkService} from '../../services/car-park.service';

@Component({
  selector: 'app-car-park',
  templateUrl: './car-park.component.html',
  styleUrls: ['./car-park.component.css']
})
export class CarParkComponent implements OnInit {

  cont = 0;
  error: {};
  alegra: any;
  carList: Car[];
  created = false;
  submitted = false;
  registerForm: FormGroup;
  minNumber = strings.minNumber;
  placeholder = strings.numberPosition;
  createCarPark = strings.createCarPark;
  required = 'Número ' + strings.require;

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
            if (it.empty) {
              this.cont += 1;
            }
          }
        }
      },
      error => this.error = error
    );
  }

  get f() { return this.registerForm.controls; }

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
}
