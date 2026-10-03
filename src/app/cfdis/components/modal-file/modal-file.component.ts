import { Component, ElementRef, inject, output, signal, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CfdisService } from '../../services/cfdis.service';

const array_accept = ['text/xml', 'application/xml'];
const isXmlFile = (file:File):boolean => array_accept.includes(file.type) || file.name.toLowerCase().endsWith('.xml');
@Component({
  selector: 'modal-file',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-file.component.html',
})
export class ModalFileComponent {
  private fb = inject(FormBuilder);
  cfdiService = inject(CfdisService);

  @ViewChild('myModalFile') modalRef!: ElementRef<HTMLDialogElement>;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  isLoading = signal(false);
  errorMessage = signal<string | null>(null);
  selectedFile: File | null = null;

  formFile: FormGroup = this.fb.group({
    archivo: [null, Validators.required]
  });

  // Método público para abrir el modal desde fuera
  open(): void {
    this.modalRef.nativeElement.showModal();
  }

  close(): void {
    this.modalRef.nativeElement.close();
  }

  resetForm(): void {
    this.clearFile();
    this.errorMessage.set(null);
  }

  onFileChange(event:Event){
    debugger;
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;

    this.errorMessage.set(null);

    if(file && !isXmlFile(file)) {
      this.clearFile();
      this.errorMessage.set('El archivo seleccionado no es un XML válido');
      return;
    }

    this.formFile.patchValue({ archivo: file });
    this.formFile.get('archivo')?.markAsTouched();
  }

  dismissError(): void{
    this.errorMessage.set(null);
    this.clearFile();
  }

  onSubmit() {
    debugger;
    if (this.formFile.invalid) {
      this.formFile.markAllAsTouched();
      return;
    }

    const file: File = this.formFile.value.file;

    const formData = new FormData();
    formData.append('xml', file, file.name);

    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.cfdiService.uploadFileXML(formData)
    .subscribe({
      next: (resp) => {
        console.log('Archivo enviado', resp);
        this.isLoading.set(false);
        this.close();
      },
      error: (err: Error) => {
        this.isLoading.set(false);
        this.errorMessage.set(err.message);
      },
    });
  }


  private clearFile(){
    this.formFile.reset();
    this.fileInput.nativeElement.value = '';
  }





}
