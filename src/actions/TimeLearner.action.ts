import { Action } from '@ngrx/store';
import { TimeLearnerModel } from '../models/TimeLearner.model';

export const TimeLearner_Get_Request = '[TimeLearner] Get Request';
export const TimeLearner_Get_Failure = '[TimeLearner] Get Failure';
export const TimeLearner_Get_Success = '[TimeLearner] Get Success';

export class TimeLearnerRequest implements Action {
    readonly type = TimeLearner_Get_Request;
    constructor() {}
}

export class TimeLearnerFailure implements Action {
    readonly type = TimeLearner_Get_Failure;
    constructor(public payload: any) {}
}

export class TimeLearnerSuccess implements Action {
    readonly type = TimeLearner_Get_Success;
    constructor(public payload: TimeLearnerModel) {}
}

export type TimeLearnerActions
    = TimeLearnerRequest
    | TimeLearnerFailure
    | TimeLearnerSuccess