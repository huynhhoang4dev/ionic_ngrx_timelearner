import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TimeLearnerEffects } from '../../effects/TimeLearner.effect';
import { timelearnerReducer } from '../../reducers/TimeLearner.reducer';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    StoreModule.forFeature('timelearner', timelearnerReducer),
    EffectsModule.forFeature([TimeLearnerEffects])
  ],
})
export class HomePageModule {}
