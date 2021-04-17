import { Component, OnInit } from '@angular/core';
import {ApiService, Destination} from '../../api.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  destinations?: Destination[];


  constructor(private apiservice: ApiService) {
  }



  ngOnInit(): void {
  this.getRoutes();
  }

  getRoutes(): void {
    this.apiservice.getData().subscribe(data => this.destinations = data );
  }


}
