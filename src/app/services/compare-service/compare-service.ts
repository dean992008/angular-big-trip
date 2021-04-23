import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CompareService {
  filterType: EventEmitter<string> = new EventEmitter();
  constructor() { }

  emitChangeFilterType(value: string): void {
    this.filterType.emit(value);
  }

  getFilterType(): EventEmitter<string> {
    return this.filterType;
  }
}
