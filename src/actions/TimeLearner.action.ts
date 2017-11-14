import { Action } from '@ngrx/store';
import { TimeLearnerModel } from '../models/TimeLearner.model';

export const Fetch_Questions         = '[TimeLearner] fetch Questions';
export const Fetch_Questions_Failure = '[TimeLearner] fetch Questions Failure';
export const Fetch_Questions_Success = '[TimeLearner] fetch Questions Success';

export class fetchQuestions implements Action {
    readonly type = Fetch_Questions;
    constructor() {}
}

export class fetchQuestionsFailure implements Action {
    readonly type = Fetch_Questions_Failure;
    constructor(public payload: any) {}
}

export class fetchQuestionsSuccess implements Action {
    readonly type = Fetch_Questions_Success;
    constructor(public payload: TimeLearnerModel) {}
}

export const Select_Option = '[Question] select Question';

export class selectOption implements Action {
    readonly type = Select_Option;
    constructor(public payload: string) {}
}


export type TimeLearnerActions
    = fetchQuestions
    | fetchQuestionsFailure
    | fetchQuestionsSuccess
    | selectOption
