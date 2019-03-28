import * as moment from 'moment';
import { Component, OnInit, Input } from '@angular/core';

import {Car} from '../../models/car/car';
import {Item} from '../../models/invoice/item';
import {Invoice} from '../../models/invoice/invoice';
import {strings} from '../../../../components/string';
import {CarParkService} from '../../services/car-park.service';
import {closeModal, createDetailInvoice, openModal} from '../../../../utils/utils';

@Component({
  selector: 'app-car-modal',
  templateUrl: './car-modal.component.html',
  styleUrls: ['./car-modal.component.css']
})
export class CarModalComponent implements OnInit {

  @Input() car: Car;
  @Input() id: string;
  @Input() show: boolean;
  error: {};
  result: any;
  invoice: Invoice;
  departureDate: Date;
  labels = {
    title: strings.exitCar,
    accept: strings.aceppt,
    canceled: strings.canceled,
    messageError: strings.notExistCar,
  };
  ngOnInit() {}
  constructor(private carParkService: CarParkService) { }

  calculatePrice(): number {
    return this.calculateDiff() *  30;
  }

  calculateDiff(): number {
    const end = moment(this.departureDate);
    const init = moment(this.car.dateIngress);
    return (end.diff(init, 'seconds'));
  }
  generateInvoiceSend() {
    const price = this.calculatePrice();
    this.departureDate = new Date();
    this.invoice = new Invoice(
      moment(this.car.dateIngress).format('YYYY-MM-DD'),
      moment(this.departureDate).format('YYYY-MM-DD'),
      1,
      [
        new Item(
          1,
          createDetailInvoice(  moment(this.car.dateIngress).format('YYYY-MM-DD'), this.car.id, price),
          price,
          1
        )
      ]
    );
    this.carParkService.SetInvoiceAlegra(this.invoice)
      .subscribe(data => this.error = data, error => this.error = error );
    this.close(this.id);
    const formData = new FormData();
    const numberAccess = this.car.numberAccess + 1;
    formData.append('time', this.car.time.toString());
    formData.append('dateIngress', this.car.dateIngress.toString());
    formData.append('numberAccess', this.car.numberAccess.toString());
    this.carParkService.deleteCar(formData, this.car.id_table)
      .subscribe(
        val => {
          if (val) {
            this.open('modalOutRegister');
          }
        },
        err => this.error = err);
  }
  close(id: string) {
    closeModal(id);
  }

  open(id: string) {
    openModal(id);
  }

}
