import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../../models/customer';
import {select, Store} from '@ngrx/store';
import {selectCustomers} from '../store/selector/customer.selectors';
import {CustomerState} from '../store/reducer/customer.reducer';
import {editCustomer} from '../store/action/customer.actions';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent {
  clickEls:any = [];
  customers$: Observable<Customer[]>;

  constructor(private store: Store<CustomerState>) {
    this.customers$ = this.store.pipe(select(selectCustomers));
    this.customers$.forEach((els)=>{
      console.log(els);
    })
  }
  updateState(event,id): void {
    let parentElement = event.target.parentElement.parentElement.querySelector("input");
    let customer_data = {
      id:id,
      name:parentElement.value
    };
    this.store.dispatch(editCustomer(customer_data));
  }

  openEditElement(event)
  {
    let parentElement = event.target.parentElement.parentElement;
    parentElement.classList.add("active");
  }

}
