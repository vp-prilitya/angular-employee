import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AppService } from '../app.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private service: AppService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(state.url);

    if (authRequired && !this.service.isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    } else if (state.url === '/login' && this.service.isLoggedIn) {
      return false;
    }

    return true;
  }
}
