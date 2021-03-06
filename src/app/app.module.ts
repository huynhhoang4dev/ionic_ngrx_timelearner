import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MyApp } from './app.component';

import { reducers } from '../reducers';
import { TimeLearnerEffects } from '../effects/TimeLearner.effect';
//add effect into EffectModule if we need load in root level

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    EffectsModule.forRoot([TimeLearnerEffects]), 
    StoreModule.forRoot(reducers),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
