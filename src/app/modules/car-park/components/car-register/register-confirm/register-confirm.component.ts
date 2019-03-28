import {Component, Input, OnInit} from '@angular/core';

import {Car} from '../../../models/car/car';
import {strings} from '../../../../../components/string';
import {closeModal, openModal} from '../../../../../utils/utils';
import {CarParkService} from '../../../services/car-park.service';


@Component({
  selector: 'app-register-confirm',
  templateUrl: './register-confirm.component.html',
  styleUrls: ['./register-confirm.component.css']
})
export class RegisterConfirmComponent implements OnInit {

  @Input() car: Car;
  message: string;
  success: boolean;
  title = strings.register;
  aceppted = strings.aceppt;
  canceled = strings.canceled;
  registerFail = strings.registerFail;
  registerSuccess = strings.registerSuccess;

  constructor(private carParkService: CarParkService) { }
  ngOnInit() { }

  cancel(id: string) {
    this.close(id);
    this.car = new Car();
  }

  close(id: string) {
    closeModal(id);
  }
  open(id: string) {
    openModal(id);
  }

  sendCar(id: string, id2: string) {
    this.close(id);
    const formData = new FormData();
    formData.append('id', this.car.id);
    formData.append('model', this.car.model);
    this.carParkService.registerPosition(formData)
      .subscribe(res => {
        this.success = res;
        if (res) {
          this.message = this.registerSuccess;
        } else {
          this.message = this.registerFail;
        }
        this.open(id2);
      } );
  }
}
