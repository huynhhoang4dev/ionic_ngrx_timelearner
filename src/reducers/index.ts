import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromTimeLearner from './TimeLearner.reducer';

export interface State {
    timelearner: fromTimeLearner.State
}

export const reducers: ActionReducerMap<State> = {
    timelearner: fromTimeLearner.timelearnerReducer
};

export const selectTimeLearnerState = createFeatureSelector<fromTimeLearner.State>('timelearner');