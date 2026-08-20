import { Component, input } from '@angular/core';
import { CFDI } from '../../interfaces/cfdi.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'list-cfdis-component',
  imports: [CurrencyPipe],
  templateUrl: './list-cfdis.component.html',
})

export class ListCfdisComponent {

  lists = input.required<CFDI[]>();

}
