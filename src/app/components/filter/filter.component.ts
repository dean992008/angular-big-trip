import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../store/reducers/compareReducer';
import * as actions from '../../store/actions';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  constructor(private store: Store<State>) {
  }

  getFilterType(value: string): void {
    this.store.dispatch(actions.filterType({payload: value}));
  }
}
