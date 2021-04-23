import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {MainComponent} from './components/main/main.component';

@Injectable({
  providedIn: 'root'
})
export class TableGuard implements CanDeactivate<MainComponent> {
  canDeactivate(
    component: MainComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {

     return true;

  }

}
