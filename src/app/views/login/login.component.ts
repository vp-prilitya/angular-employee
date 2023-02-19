import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { Auth } from '../../models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formData?: FormGroup;
  submit: boolean = false;
  error?: string;
  loading: boolean = false;

  constructor(
    private appService: AppService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    this.submit = true;

    if (this.formData?.invalid) {
      return;
    }
    this.loading = true;
    this.appService.login(this.formData?.value).subscribe({
      next: (n) => {
        this.router.navigate(['/home']);
        this.loading = false;
      },
      error: (e) => {
        this.error = e;
        this.loading = false;
      },
    });
  }
}
