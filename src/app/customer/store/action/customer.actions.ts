import { createAction, props } from '@ngrx/store';
import {Customer} from '../../../models/customer';

export const addCustomer = createAction(
  '[Customer] Add Customer',
  (customer: Customer) => ({customer})
);

export const editCustomer = createAction('[Customer] Reset Customer',(customer: Customer) => ({customer}));

export const resetCustomer = createAction('[Customer] Edit Customer',(customer: any) => ({customer}));
