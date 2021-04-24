import { Component } from '@angular/core';
import {CompareService} from '../../services/compare-service/compare-service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {
  orderType: boolean;

  constructor(private compareService: CompareService) {}

  getSortType(sortType: string, orderType: boolean): void {
    this.orderType = !this.orderType;
    this.compareService.emitChangeSortType(sortType, orderType);
  }
}
