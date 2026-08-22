import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ListCfdisComponent } from "../../components/list-cfdis/list-cfdis.component";
import { CfdisService } from '../../services/cfdis.service';

@Component({
  selector: 'by-list-page-component',
  imports: [ListCfdisComponent],
  templateUrl: './by-list-page.component.html',
})
export class ByListPageComponent {

  cfdiService = inject(CfdisService);

  size = signal(100);
  page = signal(0);

  cfdiResource = rxResource({
    params: () => ({ size: this.size(), page: this.page() }),
    stream: ({ params }) => {
      return this.cfdiService.getByAllCfdis( params.page, params.size)
    }
  })

}
