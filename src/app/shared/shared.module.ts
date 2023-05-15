import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [HeaderComponent, CartComponent],
  imports: [CommonModule, RouterModule, MatIconModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
