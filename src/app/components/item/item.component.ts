import {Component, Input, OnInit} from '@angular/core';
import {IRouteEvent} from '../../services/api.service';
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() routeEvent!: IRouteEvent;

  constructor() {
  }

  ngOnInit(): void {
  }
}
