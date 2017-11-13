import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';

import { TimeLearnerAPI } from '../configs/TimeLearner.API';

import * as TimeLearnerActions from '../actions/TimeLearner.action';

import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TimeLearnerEffects {
    constructor(private http: Http, private action$: Actions) {}
    @Effect()
    fetchQuestions$: Observable<Action> = this.action$
        .ofType(TimeLearnerActions.Fetch_Questions)
        .switchMap( action => 
            this.http.get(TimeLearnerAPI)
                .map(data => {
                        console.log(data);
                        return ({type: TimeLearnerActions.Fetch_Questions_Success, payload: data})
                    }
                )
                .catch((error) => of({type: TimeLearnerActions.Fetch_Questions_Failure, error: error}))
        )
}