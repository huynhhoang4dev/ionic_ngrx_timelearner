import { createSelector, createFeatureSelector, ActionReducer, combineReducers } from '@ngrx/store';
import * as fromTimeLearner from './TimeLearner.reducer';

export interface State {
    timelearner: fromTimeLearner.State
}



const timeLearnerReducers: ActionReducer<State> = combineReducers({
    timelearner: fromTimeLearner.timelearnerReducer
});

// export const selectTimeLearnerState = createFeatureSelector<fromTimeLearner.State>('timelearner');
export function reducers(state: any, action: any) {
    return timeLearnerReducers(state, action);
}