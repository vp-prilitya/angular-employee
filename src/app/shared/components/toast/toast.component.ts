import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styles: [],
  animations: [
    trigger('toastTrigger', [
      state('open', style({ transform: 'translateY(0%)' })),
      state('close', style({ transform: 'translateX(200%)' })),
      transition('open <=> close', [animate('500ms ease-in-out')]),
    ]),
  ],
})
export class ToastComponent implements OnInit {
  showsToast!: boolean;

  constructor(public toast: ToastService) {}

  ngOnInit(): void {}

  dismiss(): void {
    this.toast.dismissToast();
  }
}
