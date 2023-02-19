import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Helper {
  rupiah(number: number) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
  }
}
