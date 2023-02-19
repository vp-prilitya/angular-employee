import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-with-label',
  templateUrl: './input-with-label.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputWithLabelComponent),
      multi: true,
    },
  ],
})
export class InputWithLabelComponent implements OnInit {
  @Input() label!: String;
  @Input() type: String = 'text';
  @Input() placeholder: String = '';
  @Input() max!: String;
  @Input() error: boolean = false;
  @Input() name!: String;
  @Output() change = new EventEmitter<string>();

  value: any = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}

  ngOnInit(): void {}

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
