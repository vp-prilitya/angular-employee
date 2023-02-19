import {
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-search',
  templateUrl: './select-search.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectSearchComponent),
      multi: true,
    },
  ],
})
export class SelectSearchComponent implements OnInit {
  showOptions: boolean = false;
  target: any = null;
  value: string = '';
  searchTerm: string = '';
  allData: Array<any> = [];
  dataValue: any = '';

  onChange: any = () => {};
  onTouched: any = () => {};

  @Input() data: Array<any> = [];
  @Input() optionsKey!: string;
  @Input() error: boolean = false;
  @Input() optionsValue!: string;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.allData = this.data;
  }

  openSelect() {
    this.data = this.allData;
    if (!this.showOptions) {
      this.searchTerm = '';
      this.showOptions = true;
    }
  }

  selectOption(item: any) {
    this.value = item[this.optionsValue];
    this.showOptions = false;
    this.onChange(item[this.optionsKey]);
  }

  close() {
    this.value = '';
    this.dataValue = null;
  }

  search(value: any) {
    this.data = this.allData.filter((item: any) => {
      return item[this.optionsValue]
        .toLowerCase()
        .includes(value.target.value.toLowerCase());
    });
  }

  @HostListener('document:click', ['$event.target'])
  public onClickOutSide(target: any) {
    if (!this.element.nativeElement.contains(target)) {
      this.showOptions = false;
    }
  }

  writeValue(value: any): void {
    this.dataValue = value;
    this.data.forEach((val) => {
      if (val[this.optionsKey] == value) {
        this.value = val[this.optionsValue];
      }
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
