import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CounterEffects } from './counter.effects';
import * as fromCounterReducer from './counter.reducer';
import { CounterComponent } from './counter.component';

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('counter', fromCounterReducer.counterReducer),
    EffectsModule.forFeature([CounterEffects]),
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
