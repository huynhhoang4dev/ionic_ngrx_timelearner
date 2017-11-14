import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { Store } from '@ngrx/store';
import * as actions from '../../actions/TimeLearner.action';
import * as fromTimeLearner from '../../reducers/TimeLearner.reducer';
 
@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<fromTimeLearner.State>) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
    //observe state.isSuccess

    //passing into home
  }

}
