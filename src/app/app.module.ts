import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter/counter.component';
import * as fromCounterReducer from './counter/counter.reducer';
import * as fromProgressReducer from './spinner/progress.reducer';

import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './counter/counter.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerModule } from './spinner/spinner.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([ CounterEffects ]),
    StoreModule.forRoot({
      counter: fromCounterReducer.counterReducer,
      progress: fromProgressReducer.progressReducer
    }),
    BrowserAnimationsModule,
    SpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
