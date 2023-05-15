import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartProducts } from '../../../store/cart/cart.selector';
import { Product } from '../../interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems$: Observable<Product[]>;

  constructor(private authService: AuthService, private store: Store) {}

  ngOnInit(): void {
    this.cartItems$ = this.store.select(selectCartProducts);
  }
}
