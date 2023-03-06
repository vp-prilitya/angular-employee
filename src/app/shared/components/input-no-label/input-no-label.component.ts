import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-no-label',
  templateUrl: './input-no-label.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNoLabelComponent),
      multi: true,
    },
  ],
})
export class InputNoLabelComponent implements OnInit {
  @Input() type: String = 'text';
  @Input() placeholder: String = '';
  @Input() readonly: boolean = false;
  @Input() class: string = '';
  @Input() error: boolean = false;
  @Output() change = new EventEmitter<string>();

  value: any = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}

  ngOnInit(): void {}

  input(event: any): void {
    this.onChange(event.target.value);
    this.change.emit(event.target.value);
  }

  changeData(value: any) {
    this.onChange(value.target.value);
    this.change.emit(value.target.value);
  }

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
