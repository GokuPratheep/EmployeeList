import {Action, createReducer, on} from '@ngrx/store';
import * as CustomerActions from '../action/customer.actions';
import {Customer} from '../../../models/customer';

export const customerFeatureKey = 'customer';

export interface CustomerState {
  customers: Customer[];
}

export const initialState: CustomerState = {
  customers: []
};

export const customerReducer = createReducer(
  initialState,
  on(CustomerActions.addCustomer,
    (state: CustomerState, {customer}) =>
      ({...state,
        customers: [...state.customers, customer]
      })),
  on(CustomerActions.resetCustomer,  (state: any, {customer}) =>
  ({...state,
    customers: customer
  })),
  on(CustomerActions.editCustomer, (state: CustomerState, {customer}) => {
    const updatedState = state.customers.map(element => {
      return customer.id == element.id?customer:element
    });
    return {
      ...state,
      customers: updatedState
    }
  }),
);

export function reducer(state: CustomerState | undefined, action: Action): any {
  return customerReducer(state, action);
}
