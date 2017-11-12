import { Action } from '@ngrx/store';
import { TimeLearnerModel } from '../models/TimeLearner.model';

export const Fetch_Questions = '[TimeLearner] fetch Questions';
export const Fetch_Questions_Failure = '[TimeLearner] fetch Questions Failure';
export const Fetch_Questions_Success = '[TimeLearner] fetch Questions Success';

export const TimeLearner_Get_Request = '[TimeLearner] Get Request';
export const TimeLearner_Get_Failure = '[TimeLearner] Get Failure';
export const TimeLearner_Get_Success = '[TimeLearner] Get Success';

export class fetchQuestions implements Action {
    readonly type = Fetch_Questions;
    constructor() {}
}

export class fetchQuestionsFailure implements Action {
    readonly type = Fetch_Questions_Failure;
    constructor(public error: any) {}
}

export class fetchQuestionsSuccess implements Action {
    readonly type = Fetch_Questions_Success;
    constructor(public data: TimeLearnerModel) {}
}

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