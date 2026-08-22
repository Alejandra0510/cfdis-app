import { Component, input, ViewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { CFDI } from '../../interfaces/cfdi.interface';
import { ModalInfoComponent } from '../modal-info/modal-info.component';
@Component({
  selector: 'list-cfdis-component',
  imports: [CurrencyPipe, ModalInfoComponent],
  templateUrl: './list-cfdis.component.html',
})

export class ListCfdisComponent {
  lists = input.required<CFDI[]>();

 @ViewChild(ModalInfoComponent) modalInfo!: ModalInfoComponent;

  openModalInfo(id: number): void {
    this.modalInfo.open(id);

  }
}
