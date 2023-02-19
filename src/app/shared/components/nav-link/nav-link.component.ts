import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styles: [],
})
export class NavLinkComponent implements OnInit {
  @Input() title!: string;
  @Input() link!: string;
  @Input() class: string = '';

  constructor() {}

  ngOnInit(): void {}
}
