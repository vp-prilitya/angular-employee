import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public showModal: boolean = false;
  public idModal?: string;
  private body = document.querySelector('body') as HTMLElement;

  show(id: string): void {
    this.body.style.overflow = 'hidden';
    this.showModal = true;
    this.idModal = id;
  }

  dismiss(): void {
    this.body.style.overflow = 'visible';
    this.showModal = false;
    this.idModal = undefined;
  }
}
