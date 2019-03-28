import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../models/car/car';
import {strings} from '../../../../components/string';
import {CarParkService} from '../../services/car-park.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  title = strings.parkingCar;
  error: {};
  carList: Car[];
  constructor(private carParkService: CarParkService) { }

  ngOnInit() {
    this.carParkService.getCars().subscribe(
      (data: Car[]) => this.carList = data,
      error => this.error = error
    );
  }

}
