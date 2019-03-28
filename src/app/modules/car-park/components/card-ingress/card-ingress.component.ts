import { Component, OnInit, Input } from '@angular/core';

import { Car } from '../../models/car/car';
import { strings } from '../../../../components/string';

@Component({
  selector: 'app-card-ingress',
  templateUrl: './card-ingress.component.html',
  styleUrls: ['./card-ingress.component.css']
})
export class CardIngressComponent implements OnInit {

  @Input() car: Car;
  title: string = strings.register;
  labels: Object = {
    model: strings.car.model,
    ingress: strings.car.entryDate,
    licencePlate: strings.car.licencePlate,
    registerCarConfirm: strings.registerCarConfirm
  };
  constructor() { }

  ngOnInit() {  }

}
