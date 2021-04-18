import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  items: boolean[];

  constructor() {
    this.items = new Array(5).fill(false);
  }

  onClickOpen(index: number): void {
    this.items[index] = !this.items[index];
  }

  ngOnInit(): void {
  }


}
