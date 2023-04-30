import { createReducer, on } from '@ngrx/store';
import { Product } from '../../shared/interfaces';
import { addItem } from './cart.actions';

export interface CartState {
  items: Product[];
}

export const initialState: CartState = {
  items: [],
};

const _cartReducer = createReducer(
  initialState,
  on(addItem, (state, { item }) => ({
    ...state,
    items: [...state.items, item],
  }))
);

export function cartReducer(state: any, action: any) {
  return _cartReducer(state, action);
}
