import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee';
import { ModalService } from '../../../shared/services/modal.service';
import { Helper } from '../../../utils/helper';

@Component({
  selector: 'view-employee',
  templateUrl: './view-employee.component.html',
  styles: [],
})
export class ViewEmployeeComponent implements OnInit {
  @Input() data?: Employee;
  @Input() id?: string;

  title?: string;

  constructor(public helper: Helper, public modal: ModalService) {
    this.title = 'Detail Employee';
  }

  ngOnInit(): void {}

  intParse(data: any): number {
    return parseInt(data);
  }
}
