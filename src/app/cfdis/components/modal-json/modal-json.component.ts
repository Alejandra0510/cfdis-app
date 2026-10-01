import { JsonPipe } from '@angular/common';
import { CfdisService } from './../../services/cfdis.service';
import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'modal-json',
  imports: [JsonPipe],
  templateUrl: './modal-json.component.html',
})
export class ModalJsonComponent {

  cfdiService = inject(CfdisService);

  private currentId = signal<number>(0);

  @ViewChild('myModalInfoJSON') modalRef!: ElementRef<HTMLDialogElement>;


  infoById = rxResource({
    params: () => ({ id: this.currentId() }),
    stream: ({ params }) => {
      if (!params.id) return of(null);
      return this.cfdiService.getCfdiById(params.id);
    }
  });



  open(id: number): void {
    this.currentId.set(id);
    this.modalRef.nativeElement.showModal();
  }

}
