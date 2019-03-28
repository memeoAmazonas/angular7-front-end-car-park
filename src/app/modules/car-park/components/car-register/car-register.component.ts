import {Component, OnInit } from '@angular/core';

import { strings } from '../../../../components/string';
import { openModal, closeModal } from '../../../../utils/utils';


@Component({
  selector: 'app-register-car',
  templateUrl: './car-register.component.html',
  styleUrls: ['./car-register.component.css']
})

export class CarRegisterComponent implements OnInit {

  title = strings.register;

  constructor() {  }
  ngOnInit() { }

  close(id: string) {
    closeModal(id);
  }
  open(id: string) {
    openModal(id);
  }
}
