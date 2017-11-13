import * as actions from '../actions/TimeLearner.action';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

import { TimeLearnerModel, Question } from '../models/TimeLearner.model';


export interface TimeLearner {
    isFetching: boolean,
    isSuccess: boolean,
    version: string,
    currentQuestion: Question,
    currentOption: string,
    questions: Question[],
    score: number
}

function questionIterators(array: any) {
    let nextIndex = 0;
    return {
        next: function(selectedOption: string) {
            arguments.length == 0
                ?   nextIndex < array.length 
                    ? {value: array[nextIndex++], done: false}
                    : {done: true}
                :   {done: false}
            
        }
    }
}
function next(selectedOption: string) {

}

//Entity Adapter
export const timelearnerAdapter = createEntityAdapter<TimeLearner>();
export interface State extends EntityState<TimeLearner> { }

export const initialState: State = timelearnerAdapter.getInitialState({
    isFetching: false,
    isSuccess: false
});

//reducer
export function timelearnerReducer(state: State = initialState,action: actions.TimeLearnerActions) {
    switch(action.type) {
        case actions.Fetch_Questions:
            return {...state, isFetching: true, isSuccess: false, data: null };
        case actions.Fetch_Questions_Failure:
            return {};
        case actions.Fetch_Questions_Success:
            return {};
        case actions.Select_Option: {
            return {};
        }        
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

