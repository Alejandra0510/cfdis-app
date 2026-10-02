import { Component, input, output, ViewChild } from '@angular/core';

import { CFDI } from '../../interfaces/cfdi.interface';
import { PaginationComponent } from "../pagination/pagination.component";
import { ListDtlComponent } from './list-dtl/list-dtl.component';
@Component({
  selector: 'list-cfdis-component',
  imports: [PaginationComponent, ListDtlComponent],
  templateUrl: './list-cfdis.component.html',
})

export class ListCfdisComponent {
  lists    = input.required<CFDI[]>();
  size     = input.required<number>();
  rows     = input.required<number>();
  pages    = input.required<number>();
  page_act = input.required<number>();
  checked  = input<number>(0);

  pageChange = output<number>();
  flagChecked= output<number>();

  orderByFecha(order: Event){
    if(!order) return;
    const isChecked = order.target as HTMLInputElement;
    (isChecked.checked) ? this.flagChecked.emit(parseInt(isChecked.value)) : this.flagChecked.emit(0);
  }


  cleanFill(event: Event){
    event.preventDefault();
    this.flagChecked.emit(0);
  }
}
