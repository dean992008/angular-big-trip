import {createAction, props} from '@ngrx/store';
import {IRouteEvent} from '../services/api-service/api.service';

export const filterType = createAction(
  '[Filter Component] filterType',
  props<{ payload: string }>()
);

export const sortingOptions = createAction(
  '[Sort Component] sortType, sortOrder',
  props<{payload: {order: boolean, type: string}}>()
);

export const routesData = createAction(
  '[Points Effects] Get Points Data',
  props<{payload: IRouteEvent[]}>()
);
