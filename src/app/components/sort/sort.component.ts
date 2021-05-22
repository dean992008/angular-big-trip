import { Component } from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromState from '../../store';
import * as actions from '../../store/actions';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  orderType: boolean;

  constructor(private store: Store<fromState.State>) {}

  getSortType(sortType: string, orderType: boolean): void {
    this.orderType = !this.orderType;
    this.store.dispatch(actions.sortingOptions({payload: {order: orderType, type: sortType}}));
  }
}
