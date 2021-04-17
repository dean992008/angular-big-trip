import {Component, Input, OnInit} from '@angular/core';
import {Destination} from '../../api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() destination: Destination;

  constructor() {
  }

  ngOnInit(): void {
  }

}
