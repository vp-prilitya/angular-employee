import { Injectable } from '@angular/core';
import { delay, observable, Observable } from 'rxjs';
import { Auth } from './models/auth';
import { Employee } from './models/employee';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  user: Auth = {
    username: 'admin',
    password: 'admin',
  };

  data: Employee[] = [];

  constructor(private httpClient: HttpClient, private route: Router) {}

  login(param: Auth): Observable<any> {
    const data = new Observable((observable) => {
      setTimeout(() => {
        if (param.username != this.user.username) {
          observable.error('username invalid');
        } else if (param.password != this.user.password) {
          observable.error('password invalid');
        } else {
          observable.next('oke');
          localStorage.setItem('user', JSON.stringify(param));
        }
        observable.complete();
      }, 1000);
    });

    return data;
  }

  getJson(): Observable<Employee[]> {
    return this.httpClient
      .get<Employee[]>('assets/data/data.json')
      .pipe(delay(1000));
  }

  getEmploye(): Observable<Employee[]> {
    const result = new Observable<Employee[]>((observable) => {
      this.getJson().subscribe((value) => {
        if (this.data.length == 0) {
          this.data = value;
        }
        observable.next(this.data);
        observable.complete();
      });
    });

    return result;
  }

  createEmployee(body: any): Observable<any> {
    const result = new Observable<any>((observable) => {
      setTimeout(() => {
        this.data.push(body);
        observable.next('Data Created');
        observable.complete();
      }, 1000);
    });

    return result;
  }

  logout() {
    localStorage.removeItem('user');
    this.route.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    const data = localStorage.getItem('user');
    if (data) {
      return true;
    } else {
      return false;
    }
  }
}
