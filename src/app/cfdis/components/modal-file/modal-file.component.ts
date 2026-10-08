import { Component, ElementRef, inject, output, signal, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CfdisService } from '../../services/cfdis.service';
import Swal from 'sweetalert2';
import { finalize } from 'rxjs';

const flagReload = 1;
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
  reloadInfo = output<number>();

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
  }

  onFileChange(event:Event){
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;

    if(file && !isXmlFile(file)) {
      this.close();
      this.clearFile();

      Swal.fire({
        icon:'error',
        title:'Ooops..',
        text: 'El archivo seleccionado no es un XML válido',
      })
      .then((result) => {
        if(result.isConfirmed){
          this.clearFile();
          this.open();
        }
      });
    }

    this.formFile.patchValue({ archivo: file });
    this.formFile.get('archivo')?.markAsTouched();
  }

  onSubmit() {

    if (this.formFile.invalid) {
      this.formFile.markAllAsTouched();
      return;
    }

    const file: File = this.formFile.value.archivo;

    const xmlFile = new File([file], file.name, { type: 'application/xml' });

    const formData = new FormData();
    formData.append('xml', xmlFile, xmlFile.name);

    this.isLoading.set(true);

    this.cfdiService.uploadFileXML(formData)
    .pipe(finalize(() => this.isLoading.set(false)))
    .subscribe({
      next: (resp) => {
        this.close();
        this.resetForm();
        if (resp.status === 201) {
          Swal.fire({
            icon: 'success',
            title: 'Correcto',
            text: 'Comprobante agregado exitosamente'
          })
          .then(() => this.reloadInfo.emit(flagReload))
        } else {
          Swal.fire({
            icon: 'warning',
            text: `Respuesta inesperada (${resp.status})`
          })
        }
      },
      error: (err: Error) => {
        this.close();
        Swal.fire({
          icon: 'error',
          title: 'Error..',
          text: `Respuesta inesperada (${err.message})`
        })
      },
    });
  }

  private clearFile(){
    this.formFile.reset();
    this.fileInput.nativeElement.value = '';
  }





}
