import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter/counter.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './counter/counter.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerModule } from './spinner/spinner.module';
import { ROOT_REDUCERS, metaReducers } from './reducers';
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([CounterEffects]),
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    BrowserAnimationsModule,
    CounterModule,
    SpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
