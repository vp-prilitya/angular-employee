import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: [],
})
export class PaginationComponent implements OnInit {
  @Input() size: number = 0;
  @Input() page: number = 0;
  @Input() length: number = 0;
  @Input() showInfo: boolean = true;
  @Output() select = new EventEmitter<number>();

  math: Math = Math;

  constructor() {}

  ngOnInit(): void {}

  pagination(c: number, m: number): Array<string | number> {
    var current = c,
      last = m,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || (i >= left && i < right)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  }

  changePage(item: any) {
    this.page = item;
    this.select.emit(item);
  }

  showPage(): number {
    let number = 0;
    if (this.length > 0) {
      number = (this.page - 1) * this.size + 1;
    }
    return number;
  }

  showTotal(): number {
    let total = 0;
    if (this.length > 0) {
      total = this.page * this.size;
      if (total > this.length) {
        total = this.length;
      }
    }

    return total;
  }
}
