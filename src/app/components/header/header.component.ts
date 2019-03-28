import { Component, OnInit } from '@angular/core';

import { strings} from '../string';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  labels = strings;

  constructor() { }

  ngOnInit() { }

}
