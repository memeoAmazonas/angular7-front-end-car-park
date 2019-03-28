import { Location } from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';

import {closeModal} from '../../../../../utils/utils';
import {strings} from '../../../../../components/string';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.css']
})
export class RegisterSuccessComponent implements OnInit   {

  @Input() success;
  @Input() message: string;
  title = strings.register;
  label = strings.aceppt;

  constructor(private location: Location) { }
  ngOnInit() {
  }

  close(id: string) {
    if (this.success) {
      location.reload();
      closeModal(id);
    } else {
      closeModal(id);
    }
  }
}
