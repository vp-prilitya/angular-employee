import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-between',
  templateUrl: './text-between.component.html',
  styles: [],
})
export class TextBetweenComponent implements OnInit {
  @Input() left?: string;
  @Input() right?: any;

  constructor() {}

  ngOnInit(): void {}
}
