import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AppService } from '../../../app.service';
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
    private toast: ToastService
  ) {
    this.dateNow = moment().format('YYYY-MM-DD');
  }

  ngOnInit(): void {
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

  get registerFormControl() {
    return this.formData.controls;
  }

  create() {
    this.submit = true;
    if (this.formData.invalid) {
      return;
    }

    this.loading = true;
    this.service.createEmployee(this.formData.value).subscribe((data) => {
      this.router.navigate(['/employee']);
      this.loading = false;
      this.toast.showToast('Created Success!', TOAST_STATE.success);
    });
  }

  close() {
    this.router.navigate(['/employee']);
  }
}
