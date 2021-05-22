import * as fromCompareReducer from './reducers/compareReducer';
import * as fromDataReducer from './reducers/dataReducer';
import {ActionReducerMap} from '@ngrx/store';

export interface State {
  compareStore: fromCompareReducer.State;
  dataStore: fromDataReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  compareStore: fromCompareReducer.reducer,
  dataStore: fromDataReducer.reducer
};
