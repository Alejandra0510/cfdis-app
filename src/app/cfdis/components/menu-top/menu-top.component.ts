import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ModalFileComponent } from "../modal-file/modal-file.component";

@Component({
  selector: 'menu-top',
  imports: [RouterLink, RouterLinkActive, ModalFileComponent],
  templateUrl: './menu-top.component.html',
})
export class MenuTopComponent {

  @ViewChild(ModalFileComponent) modalFile!: ModalFileComponent;


  goExit = () => {
      window.location.assign('./');
  }

  openModalSaveFile() {
    this.modalFile.open();
  }
}
