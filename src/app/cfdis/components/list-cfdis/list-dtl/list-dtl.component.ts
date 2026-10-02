import { Component, input, ViewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { CFDI } from '../../../interfaces/cfdi.interface';
import { ModalInfoComponent } from '../../modal-info/modal-info.component';
import { ModalJsonComponent } from '../../modal-json/modal-json.component';

@Component({
  selector: 'list-dtl',
  imports: [CurrencyPipe, ModalInfoComponent, ModalJsonComponent],
  templateUrl: './list-dtl.component.html',
})
export class ListDtlComponent {

  dtl_list = input.required<CFDI[]>();

 @ViewChild(ModalJsonComponent) modalJson!: ModalJsonComponent;
 @ViewChild(ModalInfoComponent) modalInfo!: ModalInfoComponent;

  openModalJSON(id: number) {
    this.modalJson?.open(id);
  }

  openModalInfo(id: number): void {
    this.modalInfo?.open(id);
  }
}
