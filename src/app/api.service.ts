import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Destination {
name: string;
  description: string;
  pictures: [
    {
      src: string,
      description: string
    }
  ];
}

@Injectable({
  providedIn: 'root'
})

const httpOptions = {
  headers: new HttpHeaders()
    .set('Authorization',  'Basic er883jdzbdw')
};

export class ApiService {

  private pointsURL = ' https://13.ecmascript.pages.academy/big-trip/points';

  constructor(private http: HttpClient) { }




  getData(): Observable<any> {
    return this.http.get(this.pointsURL, httpOptions);
  }
}
