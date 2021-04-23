import {Component, OnInit} from '@angular/core';
import {ApiService, IRouteEvent} from '../../services/api-service/api.service';
import {Observable} from 'rxjs';
import {CompareService} from '../../services/compare-service/compare-service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit{
  routeEvents$: Observable<IRouteEvent[]>;
  filterType!: string;

  constructor(private apiService: ApiService,
              private filterService: CompareService) {
    this.routeEvents$ = apiService.getData();
  }

  ngOnInit(): void {
    this.filterService.getFilterType().subscribe(item => this.selectedFilter(item));
  }

  selectedFilter(item: string): void {
    this.filterType = item;
  }
}
