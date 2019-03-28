import { Component, OnInit, Input } from '@angular/core';

import {Car} from '../../models/car/car';
import { strings } from '../../../../components/string';
import {closeModal, openModal} from '../../../../utils/utils';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() car: Car;
  @Input() isEmpty: boolean;
  labels = {
    exit: strings.car.exit,
    isEmpty: strings.isEmpty,
    entry: strings.car.entry,
    model: strings.car.model,
    position: strings.position,
    licencePlate: strings.car.licencePlate,
  };
  constructor() { }
  ngOnInit() { }

  open(id: string) {
    openModal(id);
  }
  close(id: string) {
    closeModal(id);
  }
}
