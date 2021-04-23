import { Pipe, PipeTransform } from '@angular/core';
import {IRouteEvent} from '../../services/api-service/api.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: IRouteEvent[], ...args: string[]): any {
    console.log(args);
    return value;
  }
}
