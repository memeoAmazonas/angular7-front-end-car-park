import {Component, OnInit} from '@angular/core';

import {Car} from '../../models/car/car';
import {strings} from '../../../../components/string';
import {calculateTimeInCourse} from '../../../../utils/utils';
import {CarParkService} from '../../services/car-park.service';

@Component({
  selector: 'app-statistics-actually-car',
  templateUrl: './statistics-actually-car.component.html',
  styleUrls: ['./statistics-actually-car.component.css']
})
export class StatisticsActuallyCarComponent implements OnInit {

  error: {};
  carList: Car[];
  labels = {
    title: strings.actuallyCar,
    timeInCourse: strings.timeInCourse,
    lastPosition: strings.lastPosition,
    licencePlate: strings.car.licencePlate,
    actullyPosition: strings.actuallyPosition
  };
  constructor(private carParkService: CarParkService) { }
  ngOnInit() {
    this.carParkService.getCars().subscribe(
      (data: Car[]) => this.carList = data,
      error => this.error = error
    );
  }
  actuallyPosition(car: Car): number {
    return car.positionPrevious !== -1 ? car.positionPrevious + 1 : car.position + 1;
  }
  timeInCourse(car: Car): number {
    return calculateTimeInCourse(car);
  }
}
