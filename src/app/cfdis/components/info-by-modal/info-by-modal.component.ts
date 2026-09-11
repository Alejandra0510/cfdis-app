import { Component, computed, effect, input } from '@angular/core';
import { toCFDI } from '../../interfaces/to.cfdi.interface';
import { InfoGeneralComponent } from "./info-general/info-general.component";
import { InfoConceptosComponent } from "./info-conceptos/info-conceptos.component";
import { InfoImpuestosComponent } from "./info-impuestos/info-impuestos.component";

@Component({
  selector: 'info-by-modal-component',
  imports: [InfoGeneralComponent, InfoConceptosComponent, InfoImpuestosComponent],
  templateUrl: './info-by-modal.component.html',
})
export class InfoByModalComponent {

  items = input.required<toCFDI>();
  conceptos = computed(() => this.items().conceptos ?? []);
  impuestos = computed(() => this.items().total_impuestos ?? []);

  // deb = effect(() => {
  //   console.log(this.impuestos());
  // })

}
