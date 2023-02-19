import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponentComponent } from './button-component/button-component.component';
import { CardsComponent } from './cards/cards.component';
import { InputWithLabelComponent } from './input-with-label/input-with-label.component';
import { LogoComponent } from './logo/logo.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { PaginationComponent } from './pagination/pagination.component';
import { InputNoLabelComponent } from './input-no-label/input-no-label.component';
import { SelectSearchComponent } from './select-search/select-search.component';
import { FormsModule } from '@angular/forms';
import { ErrorInputComponent } from './error-input/error-input.component';
import { TextBetweenComponent } from './text-between/text-between.component';

const component = [
  ButtonComponentComponent,
  CardsComponent,
  InputWithLabelComponent,
  LogoComponent,
  ModalComponent,
  NavbarComponent,
  HeaderPageComponent,
  NavLinkComponent,
  LoadingComponent,
  PaginationComponent,
  InputNoLabelComponent,
  SelectSearchComponent,
  ErrorInputComponent,
  TextBetweenComponent,
];

@NgModule({
  declarations: component,
  exports: component,
  imports: [CommonModule, RouterModule, FormsModule],
})
export class ComponentsModule {}
