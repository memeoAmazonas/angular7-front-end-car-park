import { Component, OnInit } from '@angular/core';
import {Car} from '../../models/car/car';
import {strings} from '../../../../components/string';
import {CarParkService} from '../../services/car-park.service';

@Component({
  selector: 'app-statistics-most-visited',
  templateUrl: './statistics-most-visited.component.html',
  styleUrls: ['./statistics-most-visited.component.css']
})
export class StatisticsMostVisitedComponent implements OnInit {

  constructor(private carParkService: CarParkService) { }
  labels = {
    title: strings.mostVisited,
    position: strings.position,
    numberAccess: strings.numberAccess,
    timeOccupated: strings.timeOccupated
  };
  error: {};
  carList: Car[];
  ngOnInit() {
    this.carParkService.getTopFive().subscribe(
      (data: Car[]) => this.carList = data,
      error => this.error = error
    );

  }
}
