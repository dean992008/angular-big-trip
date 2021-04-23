import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const paramReq = request.clone({
        setHeaders: {
          Authorization: 'Basic er883jdzbdw'
        }
      });
      const nextHandle = next.handle(paramReq);
      nextHandle.subscribe(() => {}, (error) => {
        if (error.status === 401) {
        location.href = '/';
      }});
      return nextHandle;
  }
}
