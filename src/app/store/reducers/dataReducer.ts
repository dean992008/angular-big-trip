import {Action, createReducer, on} from '@ngrx/store';
import * as actions from '../actions';
import {IRouteEvent} from '../../services/api-service/api.service';

export interface State {
 routes: IRouteEvent[];
}

export const initialState: State = {
 routes: []
};

export const dataReducer = createReducer(
  initialState,
  on(actions.routesData, (state, action) => ({...state, routes: action.payload})),
);

export function reducer(state: State | undefined, action: Action) {
  return dataReducer(state, action);
}
