import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TestComponent } from './components/test/test.component';

import {StoreModule} from '@ngrx/store';
import {lsyReducer} from '../reducers/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {MovieEffects} from './effect/app.effect';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({lsy: lsyReducer}),
    EffectsModule.forRoot([MovieEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
