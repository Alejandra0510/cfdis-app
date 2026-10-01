import { Component, input, output, ViewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { CFDI } from '../../interfaces/cfdi.interface';
import { ModalInfoComponent } from '../modal-info/modal-info.component';
import { PaginationComponent } from "../pagination/pagination.component";
import { ModalJsonComponent } from '../modal-json/modal-json.component';
@Component({
  selector: 'list-cfdis-component',
  imports: [CurrencyPipe, ModalInfoComponent, PaginationComponent, ModalJsonComponent],
  templateUrl: './list-cfdis.component.html',
})

export class ListCfdisComponent {
  lists = input.required<CFDI[]>();

  size = input.required<number>();

  rows = input.required<number>();
  pages = input.required<number>();

  page_act = input.required<number>();

  pageChange = output<number>();
  flagChecked= output<number>();

 @ViewChild(ModalInfoComponent) modalInfo!: ModalInfoComponent;
 @ViewChild(ModalJsonComponent) modalJson!: ModalJsonComponent;

  openModalInfo(id: number): void {
    this.modalInfo?.open(id);
  }

  openModalJSON(id: number) {
    this.modalJson?.open(id);
  }

  orderByFecha(change: any){
    const isChecked = (change.target.checked) ? 1 : 2;
    this.flagChecked.emit(isChecked);
  }
}
