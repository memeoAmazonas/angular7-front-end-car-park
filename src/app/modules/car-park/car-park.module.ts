import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CarParkRoutingModule } from './car-park-routing.module';

import { CarComponent } from './components/car/car.component';
import { AdminComponent } from './components/admin/admin.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { CarParkComponent } from './components/car-park/car-park.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarModalComponent } from './components/car-modal/car-modal.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { CarRegisterComponent } from './components/car-register/car-register.component';
import { CardIngressComponent } from './components/card-ingress/card-ingress.component';
import { ModalOutComponent } from './components/car-register-out/modal-out/modal-out.component';
import { CarRegisterOutComponent } from './components/car-register-out/car-register-out.component';
import { RegisterFormComponent } from './components/car-register/register-form/register-form.component';
import { RegisterConfirmComponent } from './components/car-register/register-confirm/register-confirm.component';
import { RegisterSuccessComponent } from './components/car-register/register-success/register-success.component';
import { StatisticsMostVisitedComponent } from './components/statistics-most-visited/statistics-most-visited.component';
import { StatisticsActuallyCarComponent } from './components/statistics-actually-car/statistics-actually-car.component';

@NgModule({
  declarations:
    [
        CarComponent,
        AdminComponent,
        InvoiceComponent,
        CarParkComponent,
        CarListComponent,
        CarModalComponent,
        ModalOutComponent,
        StatisticsComponent,
        CarRegisterComponent,
        CardIngressComponent,
        RegisterFormComponent,
        CarRegisterOutComponent,
        RegisterConfirmComponent,
        RegisterSuccessComponent,
        StatisticsMostVisitedComponent,
        StatisticsActuallyCarComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarParkRoutingModule
  ],
  exports: [
    CarParkComponent
  ],
})
export class CarParkModule { }
