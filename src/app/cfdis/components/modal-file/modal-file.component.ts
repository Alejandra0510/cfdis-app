import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'modal-file',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-file.component.html',
})
export class ModalFileComponent {

  private fb = inject(FormBuilder);

  @ViewChild('myModalFile') modalRef!: ElementRef<HTMLDialogElement>;

  formFile = this.fb.group({
    file: [null]
  });

  // Método público para abrir el modal desde fuera
  open(): void {
    this.modalRef.nativeElement.showModal();
  }

  onFileChange(event:Event){

  }

  saveFile() {

  }


}
