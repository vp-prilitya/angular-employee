import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: [],
})
export class DialogComponent implements OnInit {
  @Input() message!: string;

  constructor(public dialog: DialogService) {}

  ngOnInit(): void {}

  close(): void {
    this.dialog.closeDialog();
  }

  submit(): void {
    this.dialog.submitDialog();
  }
}
