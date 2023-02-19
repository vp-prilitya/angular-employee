import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: [],
})
export class ModalComponent implements OnInit {
  @Input() title: string = '';
  @Input() loading: boolean = false;
  @Input() id?: string;

  constructor(public modal: ModalService) {}

  ngOnInit(): void {}
}
