import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {strings} from '../../components/string';
import { AdminComponent } from './components/admin/admin.component';
import {CarParkComponent} from './components/car-park/car-park.component';
import {CarListComponent} from './components/car-list/car-list.component';
import {StatisticsComponent} from './components/statistics/statistics.component';

const routes: Routes = [
  {path: strings.routes.urlAdmin, component: AdminComponent},
  {path: strings.routes.urlHome, component: CarParkComponent },
  {path: strings.routes.urlCarPark, component: CarListComponent},
  {path: strings.routes.urlStatistics, component: StatisticsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarParkRoutingModule { }
