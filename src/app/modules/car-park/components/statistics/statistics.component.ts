import { Component, OnInit } from '@angular/core';

import {strings} from '../../../../components/string';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
title = strings.statistics;
  constructor() { }

  ngOnInit() { }

}
