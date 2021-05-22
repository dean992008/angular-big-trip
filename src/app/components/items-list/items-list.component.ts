import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {ApiService} from '../../services/api-service/api.service';
import {select, Store} from '@ngrx/store';
import * as fromState from '../../store';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  routeEvents$: Observable<any> = this.store.pipe(select(state => state.dataStore.routes)) ;
  filterType = 'everything';
  sortType = 'day';
  orderType = true;

  constructor(
    private apiService: ApiService,
    private store: Store<fromState.State>,
  ) {}

  ngOnInit(): void {
    this.store.pipe(select(state => state.compareStore.filterType)).subscribe(filterType => {
      this.filterType = filterType;
    });

    this.store.pipe(select(state => state.compareStore.sortType)).subscribe(sortType => {
      this.sortType = sortType;
    });

    this.store.pipe(select(state => state.compareStore.orderType)).subscribe(orderType => {
      this.orderType = orderType;
    });
  }
}
