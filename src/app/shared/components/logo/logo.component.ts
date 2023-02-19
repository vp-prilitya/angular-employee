import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styles: [],
})
export class LogoComponent implements OnInit {
  @Input() size: string = 'w-20 h-20';

  constructor() {}

  ngOnInit(): void {}
}
