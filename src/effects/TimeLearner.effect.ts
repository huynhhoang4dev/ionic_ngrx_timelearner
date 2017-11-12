import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';

import { TimeLearnerAPI } from '../configs/TimeLearner.API';

import * as TimeLearnerActions from '../actions/TimeLearner.action';

import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TimeLearnerEffects {
    constructor(private http: HttpClient, private action$: Actions) {}
    @Effect()
    fetchQuestions$: Observable<Action> = this.action$.ofType(TimeLearnerActions.TimeLearner_Get_Request)
    
        
}