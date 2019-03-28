import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {strings} from '../../../../../components/string';
import {closeModal, openModal} from '../../../../../utils/utils';

@Component({
  selector: 'app-modal-out',
  templateUrl: './modal-out.component.html',
  styleUrls: ['./modal-out.component.css']
})
export class ModalOutComponent implements OnInit {

  accept = strings.aceppt;
  message = strings.exitCarSuccess;
  title =  strings.exitCarSuccessTitle;
  constructor(private location: Location) { }

  ngOnInit() {
  }
  close(id: string) {
    closeModal(id);
    location.reload();

  }
  open(id: string) {
    openModal(id);
  }

}
