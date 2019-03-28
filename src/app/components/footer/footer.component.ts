import { Component, OnInit } from '@angular/core';

import {strings } from '../string';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
copyright: string = strings.copyright;
  constructor() { }

  ngOnInit() {
  }

}
