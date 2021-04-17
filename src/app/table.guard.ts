import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {ItemsListComponent} from './components/items-list/items-list.component';

@Injectable({
  providedIn: 'root'
})
export class TableGuard implements CanDeactivate<ItemsListComponent> {
  canDeactivate(
    component: ItemsListComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {

     return true;

  }

}
