import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { LoadingPage } from '../pages/loading/loading';

import { Store } from '@ngrx/store';
import * as actions from '../actions/TimeLearner.action';
import * as fromRoot from '../reducers';

@Component({
  templateUrl: 'app.html',
})
export class MyApp{
  rootPage:string;// = 'HomePage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private store: Store<fromRoot.State>) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide(); 
      
    });
    console.log('constructor AppComponent')
    
    //request Question
    this.store.dispatch(new actions.fetchQuestions());
    this.rootPage = 'LoadingPage';
    
  }

}

