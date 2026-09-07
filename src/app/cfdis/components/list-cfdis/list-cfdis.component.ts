import { Component, computed, input, output, signal, ViewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { CFDI } from '../../interfaces/cfdi.interface';
import { ModalInfoComponent } from '../modal-info/modal-info.component';
import { PaginationComponent } from "../pagination/pagination.component";
@Component({
  selector: 'list-cfdis-component',
  imports: [CurrencyPipe, ModalInfoComponent, PaginationComponent],
  templateUrl: './list-cfdis.component.html',
})

export class ListCfdisComponent {
  lists = input.required<CFDI[]>();

  size = input.required<number>();

  rows = input.required<number>();
  pages = input.required<number>();

  page_act = input.required<number>();

  pageChange = output<number>();

 @ViewChild(ModalInfoComponent) modalInfo!: ModalInfoComponent;

  openModalInfo(id: number): void {
    this.modalInfo.open(id);
  }
}
