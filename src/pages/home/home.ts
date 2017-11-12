import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as actions from '../../actions/TimeLearner.action';
import * as fromTimeLearner from '../../reducers/TimeLearner.reducer';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<fromTimeLearner.State>) {
  }

  ngOnInit() {

    this.store.dispatch( new actions.fetchQuestions() )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
