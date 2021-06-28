import { Component, OnInit } from '@angular/core';
import {Patient} from '../../models/patient';
import {select, Store} from '@ngrx/store';
import {addPatient} from '../store/action/patient.action';
import {State} from '../store/reducer/patient.reducer';
import {deletePatient} from '../store/action/patient.action';

@Component({
  selector: 'app-patient-input',
  templateUrl: './patient-input.component.html',
  styleUrls: ['./patient-input.component.scss']
})
export class PatientInputComponent implements OnInit {
  name:string;
  age:number;
  hospital:string;
  id:number;
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.id = 0;
  }


  addHopital()
  {
    this.id++;
    let hospitalObj = 
    {
      id:this.id,
      name :this.name,
      age: this.age,
      hospital: this.hospital,
      notes:""
    }
    this.name = "";
    this.age = null;
    this.hospital = "";
    this.store.dispatch(addPatient(hospitalObj));
  }

  

}
