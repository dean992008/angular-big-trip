import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface IRouteEvent {
  id: string;
  type: string;
  date_from: string;
  date_to: string;
  destination: {
    name: string;
    description: string;
    pictures: [
      {
        src: string,
        description: string
      }
    ];
  };
  base_price: number;
  is_favorite: boolean;
  offers: [];
}
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private pointsURL = 'https://13.ecmascript.pages.academy/big-trip/points';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.pointsURL);
  }
}
