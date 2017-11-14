import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { Store } from '@ngrx/store';
// import * as actions from '../../actions/TimeLearner.action';
import * as fromRoot from '../../reducers';
 
@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {
  
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, private store: Store<fromRoot.State>) {
  
    this.loadingCtrl.create({
      content: 'Please wait...',
      //duration: 3000,
      dismissOnPageChange: true
    }).present(); //loading.dismiss();
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
    this.store.select(store => store.timelearner.isSuccess)
      .subscribe(
        res => {         
          console.log('loading Success');
          
          this.navCtrl.push('HomePage');
        }
      )
    //this.store.dispatch(new actions.selectOption('omg'))
    //observe state.isSuccess

    //passing into home
  }

}
