import { Component, OnInit } from '@angular/core';
import {Patient} from '../../models/patient';
import {select, Store} from '@ngrx/store';
import {selectAllUsers,selectCurrentUserId} from '../store/selector/patient.selectors';
import {State} from '../store/reducer/patient.reducer';
import {deletePatient,updatePatient} from '../store/action/patient.action';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.scss']
})
export class PatientDataComponent implements OnInit {
  patients$: Observable<Patient[]>;
  patient$: any;
  nameValue:String;

  constructor(private store: Store<State>) { 
    this.patients$ = this.store.pipe(select(selectAllUsers));
    this.patient$ = this.store.pipe(select(selectCurrentUserId));
  }

  ngOnInit(): void {
  }

  deletePat(id)
  {
    this.store.dispatch(deletePatient(id));
  }

  updatePat(event)
  {
    let parentElement = event.target.parentElement;
    parentElement.classList.add("active");
  }

  updatePatientEl(id,event)
  {
    let parentElement = event.target.parentElement.querySelector("input");
    let patientsData = 
    {
      id:id,
      name:parentElement.value
    }
    this.store.dispatch(updatePatient(patientsData));
  }

}
