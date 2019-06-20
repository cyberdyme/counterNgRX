import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProgressComponent } from './progress.component';
import { EffectsModule } from '@ngrx/effects';
import { ProgressEffects } from './progress.effects';
import * as fromProgressReducer from './progress.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    ProgressComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature('progress', fromProgressReducer.progressReducer),
    EffectsModule.forFeature([ ProgressEffects ]),
  ],
  exports: [
    ProgressComponent
  ]
})
export class SpinnerModule { }
