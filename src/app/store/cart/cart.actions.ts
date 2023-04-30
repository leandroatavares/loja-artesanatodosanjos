import { createAction, props } from '@ngrx/store';
import { Product } from '../../shared/interfaces';

export const addItem = createAction(
  '[Cart] add item',
  props<{ item: Product }>()
);
