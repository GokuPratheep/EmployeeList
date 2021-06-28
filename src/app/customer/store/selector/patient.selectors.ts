import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromPatient from '../reducer/patient.reducer';
 
export interface State {
  users: fromPatient.State;
}
 
export const reducers: ActionReducerMap<State> = {
  users: fromPatient.reducer2,
};
 
export const selectPatientState = createFeatureSelector<fromPatient.State>('patients');
 
export const selectUserIds = createSelector(
  selectPatientState,
  fromPatient.selectPatientIds // shorthand for usersState => fromPatient.selectUserIds(usersState)
);
export const selectUserEntities = createSelector(
  selectPatientState,
  fromPatient.selectPatientEntities
);
export const selectAllUsers = createSelector(
  selectPatientState,
  fromPatient.selectAllPatients
);
export const selectUserTotal = createSelector(
  selectPatientState,
  fromPatient.selectPatientTotal
);
export const selectCurrentUserId = createSelector(
  selectPatientState,
  fromPatient.getSelectedUserId
);
 
export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userEntities[userId]
);