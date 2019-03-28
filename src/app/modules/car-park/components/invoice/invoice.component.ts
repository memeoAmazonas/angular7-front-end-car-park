import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

import { Car } from '../../models/car/car';
import {strings} from '../../../../components/string';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  @Input()car: Car;
  dateOut: Date = new Date();
  labels = {
    model: strings.car.model,
    position: strings.position,
    id: strings.car.licencePlate,
    outDate: strings.car.outDate,
    title: strings.generateInvoice,
    dateIngress: strings.car.entryDate,
    totalAccount: strings.totalAccount,
    content: strings.generateInvoiceContent

  };
  constructor() { }
  ngOnInit() {  }

  generateExit(): Date {
    return new Date();
  }
  generateInvoice(): number {
    const end = moment(new Date());
    const init = moment(this.car.dateIngress);
    return (end.diff(init, 'seconds')) * 30;
  }

}
