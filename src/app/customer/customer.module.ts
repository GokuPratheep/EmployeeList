import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerViewComponent} from './customer-view/customer-view.component';
import {CustomerAddComponent} from './customer-add/customer-add.component';
import {StoreModule} from '@ngrx/store';
import {customerFeatureKey, reducer} from './store/reducer/customer.reducer';
import {patientFeatureKey, reducer2} from './store/reducer/patient.reducer';
import { FormsModule } from '@angular/forms';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { PatientInputComponent } from './patient-input/patient-input.component';


@NgModule({
  declarations: [CustomerViewComponent, CustomerAddComponent, PatientDataComponent, PatientInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
    StoreModule.forFeature(patientFeatureKey, reducer2),
  ],
  exports: [
    CustomerViewComponent,
    CustomerAddComponent,
    PatientDataComponent, 
    PatientInputComponent
  ]
})
export class CustomerModule {
}
