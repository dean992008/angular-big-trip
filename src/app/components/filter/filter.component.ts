import { Component } from '@angular/core';

import { CompareService } from '../../services/compare-service/compare-service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  constructor(private compareService: CompareService) {}

  getFilterType(value: string): void {
    this.compareService.emitChangeFilterType(value);
  }
}
