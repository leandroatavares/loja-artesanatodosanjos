import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectCartProducts } from '../../../store/cart/cart.selector';
import { Product } from '../../interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartItems$: Observable<Product[]>;
  constructor(private authService: AuthService, private store: Store) {}

  ngOnInit(): void {
    this.cartItems$ = this.store.select(selectCartProducts);
  }

  logout() {
    this.authService.logout();
  }

  isLogged() {
    return this.authService.getCurrentUser();
  }
}
