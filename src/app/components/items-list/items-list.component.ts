import {Component} from '@angular/core';
import {ApiService, IRouteEvent} from '../../services/api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
   routeEvents$: Observable<IRouteEvent[]>;
  constructor(private apiService: ApiService) {
    this.routeEvents$ = apiService.getData();
  }
}
