import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ApiService} from '../../services/api-service/api.service';
import {map, catchError, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import * as actions from '../actions';

@Injectable()

export class PointsEffects {

  loadRoutes$ = createEffect(() => this.actions$.pipe(
    ofType(actions.routesData.type),
    mergeMap(() => this.apiService.getData().pipe(
      map(routes => actions.routesData({payload: routes}),
    catchError(() => EMPTY)
  )))
  )
);

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}
}
