import { Pipe, PipeTransform } from '@angular/core';
import {IRouteEvent} from '../../services/api-service/api.service';
import * as moment from 'moment';
import {ESortType} from '../../enums/sortTypes';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: IRouteEvent[], ...args: any[]): any {
    value = value || [];
    let multiplier = 1;
    if (args[1] === false) {
      multiplier = -1;
    }
    switch (args[0]) {
      case ESortType.DAY:
        return value.sort((a: IRouteEvent, b: IRouteEvent) => {
          if (a?.date_from < b?.date_from) {
            return -1 * multiplier;
          } else if (a?.date_from > b?.date_from) {
            return multiplier;
          } else {
            return 0;
          }
        });
      case ESortType.TIME:
        return value.sort((a: IRouteEvent, b: IRouteEvent) => {
          const aDifference = moment(a.date_to).diff(a.date_from, 'm');
          const bDifference = moment(b.date_to).diff(b.date_from, 'm');
          if (aDifference < bDifference) {
            return -1 * multiplier;
          } else if (aDifference > bDifference) {
            return multiplier;
          } else {
            return 0;
          }
        });
      case ESortType.PRICE:
        return value.sort((a: IRouteEvent, b: IRouteEvent) => {
          if (a?.base_price < b?.base_price) {
            return -1 * multiplier;
          } else if (a?.base_price > b?.base_price) {
            return multiplier;
          } else {
            return 0;
          }
        });
    }
    return value;
  }
}
