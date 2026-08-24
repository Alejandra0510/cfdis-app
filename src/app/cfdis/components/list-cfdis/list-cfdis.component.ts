import { Component, computed, input, output, ViewChild } from '@angular/core';
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

  page = input.required<number>();
  size = input.required<number>();
  totalRecords = input.required<number>();

  pageChange = output<number>();

 @ViewChild(ModalInfoComponent) modalInfo!: ModalInfoComponent;

  openModalInfo(id: number): void {
    this.modalInfo.open(id);
  }

  onPageChange(newPage: number) {
    this.pageChange.emit(newPage);
  }
}
