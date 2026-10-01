import { Component, ElementRef, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'modal-file',
  imports: [],
  templateUrl: './modal-file.component.html',
})
export class ModalFileComponent {

  @ViewChild('myModalFile') modalRef!: ElementRef<HTMLDialogElement>;

  // Método público para abrir el modal desde fuera
  open(): void {
    this.modalRef.nativeElement.showModal();
  }


  saveFile(event: any ){

    console.log(event.target);

  }

}
