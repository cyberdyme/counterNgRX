import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter.component';
import * as fromCounterReducer from './counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './counter.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([ CounterEffects ]),
    StoreModule.forRoot({ counter: fromCounterReducer.counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
