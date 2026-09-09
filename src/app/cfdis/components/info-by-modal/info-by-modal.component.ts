import { Component, computed, input } from '@angular/core';
import { toCFDI } from '../../interfaces/to.cfdi.interface';
import { InfoGeneralComponent } from "./info-general/info-general.component";
import { InfoConceptosComponent } from "./info-conceptos/info-conceptos.component";

@Component({
  selector: 'info-by-modal-component',
  imports: [InfoGeneralComponent, InfoConceptosComponent],
  templateUrl: './info-by-modal.component.html',
})
export class InfoByModalComponent {

  items = input.required<toCFDI>();
  conceptos = computed(() => this.items().conceptos ?? []);

}
