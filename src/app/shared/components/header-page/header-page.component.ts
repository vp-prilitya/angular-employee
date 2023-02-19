import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styles: [],
})
export class HeaderPageComponent implements OnInit {
  @Input() title!: string;
  @Input() subtitle!: string;

  constructor() {}

  ngOnInit(): void {}
}
