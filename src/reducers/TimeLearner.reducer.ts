import * as actions from '../actions/TimeLearner.action';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

import { TimeLearnerModel } from '../models/TimeLearner.model';

export interface TimeLearner {
    isFetching: boolean,
    isSuccess: boolean,
    data: TimeLearnerModel
}

//Entity Adapter
export const timelearnerAdapter = createEntityAdapter<TimeLearner>();
export interface State extends EntityState<TimeLearner> { }

export const initialState: State = timelearnerAdapter.getInitialState({
    isFetching: false,
    isSuccess: false,
    data: null
});

//reducer
export function timelearnerReducer(state: State = initialState,action: actions.TimeLearnerActions) {
    switch(action.type) {
        case actions.Fetch_Questions:
            return {...state, isFetching: true, isSuccess: false, data: null };

        // case actions.TimeLearnerRequest:
        //     return timelearnerAdapter.updateOne(action.payload.({isFetching: true, isSuccess: false}), state );
        // case actions.TimeLearnerFailure:
        //     return timelearnerAdapter.addAll(action);
        // case actions.TimeLearnerSuccess:
        //     return timelearnerAdapter.addAll(action);
        default:
            return state;
    }
}

//default Selector
export const getTimeLearnerSate = createFeatureSelector<State>('timelearner');

// export const{
//     selectIds,
//     selectEntities,
//     selectAll,
//     selectTotal
// } = timelearnerAdapter.getSelectors(getTimeLearnerSate);

