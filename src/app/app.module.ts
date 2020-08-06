import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {TestComponent} from './components/test/test.component';

import {StoreModule} from '@ngrx/store';
import {lsyReducer, userReducer} from '../reducers/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {MovieEffects, UserEffects} from './effect/app.effect';
import {MaterialModule} from './material/material.module';
import {HttpClientModule} from '@angular/common/http';
import {EntityDataModule} from '@ngrx/data';
import {entityConfig} from './entity-data/entity-metadata';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {RouterGard} from './guard/router-gard';
import { MineComponent } from './components/mine/mine.component';

import {counterReducer} from '../reducers/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot({lsy: lsyReducer, user: userReducer, count: counterReducer}),
    EffectsModule.forRoot([MovieEffects, UserEffects]),
    // EntityDataModule.forRoot(entityConfig),
    // StoreRouterConnectingModule.forRoot()
  ],
  providers: [RouterGard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
