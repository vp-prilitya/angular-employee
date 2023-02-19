import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  public showsDialog$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public action$ = new Subject<boolean>();

  public dialogTitleMessage$: BehaviorSubject<string> =
    new BehaviorSubject<string>('Default title dialog message');

  public dialogSubtitleMessage$: BehaviorSubject<string> =
    new BehaviorSubject<string>('Default subtitle dialog message');

  private body = document.querySelector('body') as HTMLElement;

  constructor() {}

  showDialog(
    dialogTitleMessage?: string,
    dialogSubitleMessage?: string
  ): Observable<boolean> {
    this.dialogTitleMessage$.next(dialogTitleMessage!);
    this.dialogSubtitleMessage$.next(dialogSubitleMessage!);
    this.showsDialog$.next(true);
    this.body.style.overflow = 'hidden';

    return this.action$.asObservable();
  }

  closeDialog(): void {
    this.action$.next(false);
    this.dismissDialog();
  }

  submitDialog(): void {
    this.action$.next(true);
    this.dismissDialog();
  }

  dismissDialog(): void {
    this.body.style.overflow = 'visible';
    this.showsDialog$.next(false);
    this.action$ = new Subject<boolean>();
  }
}
