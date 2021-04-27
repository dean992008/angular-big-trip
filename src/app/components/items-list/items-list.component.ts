import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../services/api-service/api.service';
import { CompareService } from '../../services/compare-service/compare-service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  routeEvents$: Observable<any>;
  filterType = 'everything';
  sortType = 'day';
  orderType = true;

  constructor(
    private apiService: ApiService,
    private compareService: CompareService
  ) {
    this.routeEvents$ = apiService.getData();
  }

  ngOnInit(): void {
    this.compareService
      .getFilterType()
      .subscribe((item) => this.selectedFilter(item));
    this.compareService
      .getSortType()
      .subscribe((item) => this.selectedSorting(item));
    this.compareService
      .getOrderType()
      .subscribe((item) => this.selectedOrderType(item));
  }

  selectedFilter(item: string): void {
    this.filterType = item;
  }

  selectedSorting(item: string): void {
    this.sortType = item;
  }

  selectedOrderType(item: boolean): void {
    this.orderType = item;
  }
}
