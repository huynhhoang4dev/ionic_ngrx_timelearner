import * as actions from '../actions/TimeLearner.action';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

import { Question } from '../models/TimeLearner.model';


export interface TimeLearner {
    isFetching: boolean,
    isSuccess: boolean,
    version: string,
    questions: Question[],
    currentQuestion: number,
    score: number
}

function getQuestion(questions: Question[], currentQuestion: number): Question {
  return questions[currentQuestion];
}

function summitAnswer(answer: string, question: Question): boolean {
  return answer === question.time_do_display
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
            return {...state, isFetching: true, isSuccess: false };
        case actions.Fetch_Questions_Failure:
            return {...state, isFetching: false, isSuccess: false};
        case actions.Fetch_Questions_Success:
            return {...state, isFetching: false, isSuccess: true, version: action.payload.version, questions: action.payload.questions, currentQuestion: 0, score: 0};
        case actions.Select_Option: {
            let selectedOption = action.payload.selectedOption;
            return summitAnswer(selectedOption, getQuestion(state.questions, state.currentQuestion))
              ? {...state, currentQuestion: currentQuestion++, score: score++}
              : {...state}
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
