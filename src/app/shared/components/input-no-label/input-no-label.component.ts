import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'input-no-label',
  templateUrl: './input-no-label.component.html',
  styles: [],
})
export class InputNoLabelComponent implements OnInit {
  @Input() type: String = 'text';
  @Input() placeholder: String = '';
  @Input() readonly: boolean = false;
  @Input() class: string = '';
  @Input() value: any;
  @Input() error: boolean = false;
  @Output() change = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  input(event: any): void {
    this.change.emit(event.target.value);
  }
}
