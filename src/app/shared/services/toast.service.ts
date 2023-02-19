import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export const TOAST_STATE = {
  success: 'success',
  warning: 'warning',
  danger: 'danger',
};

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  public showsToast$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public toastMessage$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Default toast message'
  );
  public toastState$: BehaviorSubject<string> = new BehaviorSubject<string>(
    TOAST_STATE.success
  );

  timer: any = null;

  constructor() {}

  showToast(
    toastMessage: string,
    toastState: string,
    time: number = 3000
  ): void {
    if (this.timer != null) {
      this.dismissToast();
    }

    this.toastMessage$.next(toastMessage);
    this.toastState$.next(toastState);
    this.showsToast$.next(true);

    this.timer = setTimeout(() => {
      this.showsToast$.next(false);
    }, time);
  }

  dismissToast(): void {
    this.showsToast$.next(false);
    clearTimeout(this.timer);
    this.timer = null;
  }
}
