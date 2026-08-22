import { Component, computed, input } from '@angular/core';
import { toCFDI } from '../../interfaces/to.cfdi.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'info-by-modal-component',
  imports: [CurrencyPipe],
  templateUrl: './info-by-modal.component.html',
})
export class InfoByModalComponent {

  items = input.required<toCFDI>();
  conceptos = computed(() => this.items().conceptos ?? []);
}
