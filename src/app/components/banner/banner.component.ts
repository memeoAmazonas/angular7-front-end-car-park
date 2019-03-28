import { Component, OnInit } from '@angular/core';

import { strings } from '../string';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {

  title: string = strings.parkingName;
  subTitle: string = strings.parkingSlogan;

  constructor() { }

  ngOnInit() {  }

}
