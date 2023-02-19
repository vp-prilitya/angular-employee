import { Component, OnInit } from '@angular/core';
import { appendFile } from 'fs';
import { AppService } from '../../../app.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  openNav: boolean = false;

  constructor(private dialog: DialogService, private service: AppService) {}

  ngOnInit(): void {}

  clickToggle() {
    this.openNav = !this.openNav;
  }

  logout() {
    this.dialog
      .showDialog('Are you sure?', 'Sign out now')
      .subscribe((confirm) => {
        if (confirm) {
          this.service.logout();
        }
      });
  }
}
