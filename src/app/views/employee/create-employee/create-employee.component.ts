import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { AppService } from '../../../app.service';
import { Employee } from '../../../models/employee';
import {
  ToastService,
  TOAST_STATE,
} from '../../../shared/services/toast.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  dateNow!: string;
  formData!: FormGroup;
  submit: boolean = false;
  loading: boolean = false;
  title?: string;

  dataGroup: Array<object> = [
    {
      value: 'Apple',
      name: 'Apple',
    },
    {
      value: 'Google',
      name: 'Google',
    },
    {
      value: 'Amazon',
      name: 'Amazon',
    },
    {
      value: 'Sony',
      name: 'Sony',
    },
    {
      value: 'Yahoo',
      name: 'Yahoo',
    },
    {
      value: 'Facebook',
      name: 'Facebook',
    },
    {
      value: 'Twitter',
      name: 'Twitter',
    },
    {
      value: 'Moonton',
      name: 'Moonton',
    },
    {
      value: 'Alibaba',
      name: 'Alibaba',
    },
    {
      value: 'Microsoft',
      name: 'Microsoft',
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: AppService,
    private toast: ToastService,
    private route: ActivatedRoute
  ) {
    this.dateNow = moment().format('YYYY-MM-DD');
    this.formData = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      brithDate: ['', Validators.required],
      basicSalary: ['', Validators.required],
      status: ['', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.title = 'Create';
    if (this.route.snapshot.paramMap.get('id')) {
      this.title = 'Update';
      this.getData();
    }
  }

  get registerFormControl() {
    return this.formData.controls;
  }

  create() {
    this.submit = true;
    if (this.formData.invalid) {
      return;
    }

    this.loading = true;
    if (!this.route.snapshot.paramMap.get('id')) {
      this.service.createEmployee(this.formData.value).subscribe((data) => {
        this.router.navigate(['/employee']);
        this.loading = false;
        this.toast.showToast('Created Success!', TOAST_STATE.success);
      });
    } else {
      this.service
        .updateEmployee(
          this.route.snapshot.paramMap.get('id'),
          this.formData.value
        )
        .subscribe((data) => {
          this.router.navigate(['/employee']);
          this.loading = false;
          this.toast.showToast('Updated Success!', TOAST_STATE.warning);
        });
    }
  }

  close() {
    this.router.navigate(['/employee']);
  }

  getData() {
    this.service
      .getEmployeByID(this.route.snapshot.paramMap.get('id'))
      .subscribe((data: Employee) => {
        console.log(data);
        this.formData.setValue({
          username: data.username,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          brithDate: this.formatDate(data.brithDate),
          basicSalary: data.basicSalary,
          status: data.status,
          group: data.group,
          description: this.formatDate(data.brithDate),
        });
      });
    console.log('start');
  }

  formatDate(date: any) {
    const d = new Date();

    return moment(d).format('YYYY-MM-DD');
  }
}
