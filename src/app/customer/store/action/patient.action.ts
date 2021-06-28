import { createAction, props } from '@ngrx/store';
import {Patient} from '../../../models/patient';

export const addPatient = createAction(
  '[Patient] Add patient',
  (patient: Patient) => ({patient})
);

export const deletePatient = createAction('[Patient] Delete Patient',(id: any) => ({id}));

export const updatePatient = createAction('[Patient] Edit Customer',(update: any) => ({update}));


export const selectUser = createAction('[Patient] Geet Customer',(id: any) => ({id}));

