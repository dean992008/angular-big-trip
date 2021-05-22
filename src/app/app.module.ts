import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FilterComponent} from './components/filter/filter.component';
import {SortComponent} from './components/sort/sort.component';
import {AddNewEventComponent} from './components/add-new-event/add-new-event.component';
import {PriceComponent} from './components/price/price.component';
import {FavoritesComponent} from './components/favorites/favorites.component';
import {MainComponent} from './components/main/main.component';
import {ItemsListComponent} from './components/items-list/items-list.component';
import {ItemComponent} from './components/item/item.component';
import {LoadingComponent} from './components/loading/loading.component';
import {StatsComponent} from './components/stats/stats.component';
import {EditItemComponent} from './components/edit-item/edit-item.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './services/api-service/auth.interceptor';
import {FilterPipe} from './pipes/filter-pipe/filter.pipe';
import {SortPipe} from './pipes/sort-pipe/sort.pipe';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment.prod';
import {reducers} from './store';
import { EffectsModule } from '@ngrx/effects';
import {PointsEffects} from './store/effects/pointsEffects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    SortComponent,
    AddNewEventComponent,
    PriceComponent,
    FavoritesComponent,
    MainComponent,
    ItemsListComponent,
    ItemComponent,
    LoadingComponent,
    StatsComponent,
    EditItemComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([PointsEffects]),
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
