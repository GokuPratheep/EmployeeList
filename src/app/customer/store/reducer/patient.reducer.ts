import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Patient } from '../../../models/patient';
import * as UserActions from '../action/patient.action';

export const patientFeatureKey = 'patients';
 
export interface State extends EntityState<Patient> {
  // additional entities state properties
  selectedUserId: string | null;
}
 
export const adapter: EntityAdapter<Patient> = createEntityAdapter<Patient>();
 
export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedUserId: null,
});
 
const userReducer = createReducer(
  initialState,
  on(UserActions.addPatient, (state, { patient }) => {
    return adapter.addOne(patient, state)
  }),
  on(UserActions.deletePatient, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(UserActions.updatePatient, (state, { update }) => {
    return adapter.updateOne({id:update.id,changes:update}, state);
  }),
  on(UserActions.selectUser, (state, { id }) => ({
    ...state,
    selectedUserId: id,
  }))
);
 
export function reducer2(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
 
export const getSelectedUserId = (state: State) => state.selectedUserId;
 
// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
 
// select the array of user ids
export const selectPatientIds = selectIds;
 
// select the dictionary of user entities
export const selectPatientEntities = selectEntities;
 
// select the array of users
export const selectAllPatients = selectAll;
 
// select the total user count
export const selectPatientTotal = selectTotal;