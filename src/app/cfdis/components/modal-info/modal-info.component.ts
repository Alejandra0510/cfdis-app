import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { CfdisService } from '../../services/cfdis.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { InfoByModalComponent } from "../info-by-modal/info-by-modal.component";

@Component({
  selector: 'modal-info',
  imports: [InfoByModalComponent],
  templateUrl: './modal-info.component.html',
})

export class ModalInfoComponent {

  cfdiService = inject(CfdisService);

  private currentId = signal<number | undefined>(undefined);

  infoById = rxResource({
    params: () => ({ id: this.currentId() }),
    stream: ({ params }) => {
      if (!params.id) return of(null);
      return this.cfdiService.getCfdiById(params.id);
    }
  });

  @ViewChild('myModalInfoCFDI') modalRef!: ElementRef<HTMLDialogElement>;

  // Método público para abrir el modal desde fuera
  open(id: number): void {
    this.currentId.set(id);
    this.modalRef.nativeElement.showModal();
  }





}
