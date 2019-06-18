import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProgressComponent } from './progress.component';
import { EffectsModule } from '@ngrx/effects';
import { ProgressEffects } from './progress.effects';

@NgModule({
  declarations: [
    ProgressComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    EffectsModule.forFeature([ ProgressEffects ]),
  ],
  exports: [
    ProgressComponent
  ]
})
export class SpinnerModule { }
