import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { Employee } from '../../models/employee';
import { DialogService } from '../../shared/services/dialog.service';
import { ModalService } from '../../shared/services/modal.service';
import { ToastService, TOAST_STATE } from '../../shared/services/toast.service';
import { Helper } from '../../utils/helper';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  dataEmployee: Employee[] = [];
  dataSorting: Employee[] = [];
  dataView?: Employee;

  loading: boolean = false;
  page: number = 0;
  size: number = 10;
  order: string = 'asc';
  countData: number = 0;

  constructor(
    private appService: AppService,
    public helper: Helper,
    private toast: ToastService,
    private dialog: DialogService,
    private modal: ModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.appService.getEmploye().subscribe((data) => {
      this.dataEmployee = data;
      this.countData = data.length;
      this.loading = false;
      this.sorting(this.dataEmployee);
    });
  }

  sorting(data: Employee[]) {
    let dataSort = data.sort((a, b) => {
      if (a.username < b.username) {
        if (this.order == 'asc') {
          return -1;
        } else {
          return 1;
        }
      }
      if (a.username > b.username) {
        if (this.order == 'asc') {
          return 1;
        } else {
          return -1;
        }
      }

      return 0;
    });

    this.dataSorting = dataSort.slice(
      this.page * this.size,
      this.size * (this.page + 1)
    );
  }

  pageChange(page: number) {
    this.page = page - 1;
    this.sorting(this.dataEmployee);
  }

  sortData(type: string) {
    this.order = type;
    this.sorting(this.dataEmployee);
  }

  search(value: string): void {
    this.page = 0;
    let a = this.dataEmployee.filter(
      (x) =>
        x.username.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
        x.email.toLowerCase().indexOf(value.toLowerCase()) >= 0
    );

    this.countData = a.length;
    this.sorting(a);
  }

  update(id: number) {
    this.router.navigate(['employee/update/' + id]);
    // this.toast.showToast('Data has been updated ', TOAST_STATE.warning);
  }

  delete(index: number) {
    this.dialog
      .showDialog(
        'Are You Sure?',
        'Do you really want delete these records? This process cannot be undone.'
      )
      .subscribe((confirm) => {
        if (confirm) {
          this.appService.delete(index);
          this.toast.showToast('Data has been deleted', TOAST_STATE.danger);
          this.getData();
        }
      });
  }

  view(data: Employee): void {
    this.dataView = data;
    this.modal.show('modal-view');
  }

  clickStopper(event: any) {
    event.stopPropagation();
    return;
  }
}
