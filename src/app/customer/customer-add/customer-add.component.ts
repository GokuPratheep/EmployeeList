import {Component} from '@angular/core';
import {Store,select} from '@ngrx/store';
import {Customer} from '../../models/customer';
import {addCustomer,resetCustomer} from '../store/action/customer.actions';
import {CustomerState} from '../store/reducer/customer.reducer';
import {Observable} from 'rxjs';
import {selectCustomers} from '../store/selector/customer.selectors';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})

export class CustomerAddComponent {
  idEl:number = 1;
  arrObj:Array<Customer> = [];
  inputValue:string = "";
  customers$: Observable<Customer[]>;
  constructor(private store: Store<CustomerState>) {
  }

  addCustomer(customerName: string): void {
    const customer = new Customer();
    this.inputValue = "";
    customer.id = this.idEl++;
    customer.name = customerName;
    this.arrObj.push(customer);
    this.store.dispatch(addCustomer(customer));
  }
  resetCustomers(): void {
    let customer_data = [];
    this.store.dispatch(resetCustomer(customer_data));
  }



}
