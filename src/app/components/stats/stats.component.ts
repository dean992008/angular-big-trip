import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  moneyLabels = [`TAXI`, `BUS`, `TRAIN`, `SHIP`, `TRANSPORT`, `DRIVE`];
  moneyDataLabels = [400, 300, 200, 160, 150, 100];


  constructor() {
  }

  ngOnInit(): void {
  }
}
