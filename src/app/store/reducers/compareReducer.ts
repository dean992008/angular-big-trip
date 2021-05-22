import {Action, createReducer, on} from '@ngrx/store';
import * as actions from '../actions';

export interface State {
  filterType: string;
  orderType: boolean;
  sortType: string;
}

export const initialState: State = {
  filterType: 'everything',
  orderType: true,
  sortType: 'day',
};

export const compareReducer = createReducer(
  initialState,
  on(actions.filterType, (state, action) => ({...state, filterType: action.payload})),

  on(actions.sortingOptions,
    (state, action) =>
      ({...state, orderType: action.payload.order, sortType: action.payload.type}))
);

export function reducer(state: State | undefined, action: Action) {
  return compareReducer(state, action);
}
