import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import 'moment-duration-format';

import { IRouteEvent } from '../../services/api-service/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() routeEvent!: IRouteEvent;

<<<<<<< HEAD
  constructor() {}
  eventDuration(start: string, end: string): string {
    const difference = moment(end).diff(start, 'm');
    return moment.duration(difference, 'minutes').format('h:mm');
=======
  constructor() {
  }

  ngOnInit(): void {
>>>>>>> master
  }
}
