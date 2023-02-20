import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DialogService } from './shared/services/dialog.service';
import { ModalService } from './shared/services/modal.service';
import { ToastService } from './shared/services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-employee';

  constructor(
    private route: Router,
    modal: ModalService,
    dialog: DialogService,
    toats: ToastService
  ) {
    route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        modal.dismiss();
        dialog.closeDialog();
      }
    });
  }
}
