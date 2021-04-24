import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CompareService {
  filterType: EventEmitter<string> = new EventEmitter();
  sortType: EventEmitter<string> = new EventEmitter();
  orderType: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  emitChangeFilterType(value: string): void {
    this.filterType.emit(value);
  }

  emitChangeSortType(sortType: string, orderType: boolean): void {
    this.sortType.emit(sortType);
    this.orderType.emit(orderType);
  }

  getFilterType(): EventEmitter<string> {
    return this.filterType;
  }

  getSortType(): EventEmitter<string> {
    return this.sortType;
  }

  getOrderType(): EventEmitter<boolean> {
    return this.orderType;
  }
}
