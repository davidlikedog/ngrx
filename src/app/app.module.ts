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

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot({lsy: lsyReducer, user: userReducer}),
    EffectsModule.forRoot([MovieEffects, UserEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
