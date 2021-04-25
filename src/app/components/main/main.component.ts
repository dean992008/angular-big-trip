import { Component, OnInit, ViewChild } from '@angular/core';

import { ItemsListComponent } from '../items-list/items-list.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
<<<<<<< HEAD
  @ViewChild('listComponent') listComponent!: ItemsListComponent;

  constructor() {}
=======

  constructor() { }

  ngOnInit(): void {
  }
>>>>>>> master

  ngOnInit(): void {}
}
