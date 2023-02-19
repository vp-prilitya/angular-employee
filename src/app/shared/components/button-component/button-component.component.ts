import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button-component.component.html',
  styles: [],
})
export class ButtonComponentComponent implements OnInit {
  @Input() color: String = 'btn-blue';
  @Input() loading: Boolean = false;
  @Input() type: String = 'submit';
  @Input() class: String = '';

  constructor() {}

  ngOnInit(): void {}
}
