import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

import { IRouteEvent } from '../../services/api-service/api.service';
import { EFilterType } from '../../enums/filterType';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: IRouteEvent[], ...args: string[]): any {
    switch (args[0]) {
      case EFilterType.EVERYTHING:
        return value;
      case EFilterType.FUTURE:
        return value.filter((item) => moment(item.date_from).isAfter());
      case EFilterType.PAST:
        return value.filter((item) => moment(item.date_from).isBefore());
    }
    return value;
  }
}
