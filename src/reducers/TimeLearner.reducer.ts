import * as actions from '../actions/TimeLearner.action';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Question } from '../models/TimeLearner.model';


export interface State {
    isFetching: boolean,
    isSuccess: boolean,
    version: string,
    questions: Question[],
    currentQuestion: number,
    score: number
};

// export const initialState: State = {
//     isFetching: false
// }

// export const 
// export const selectCurrentQuestion = createSelector()

// function getQuestion(questions: Question[], currentQuestion: number): Question {
//   return questions[currentQuestion];
// }

// function summitAnswer(answer: string, question: Question): boolean {
//   return answer === question.time_do_display
// }

//Entity Adapter
// export const timelearnerAdapter = createEntityAdapter<TimeLearner>();
// export interface State extends EntityState<TimeLearner> { }

// export const initialState: State = timelearnerAdapter.getInitialState({
//     isFetching: false,
//     isSuccess: false
// });

//reducer
export function timelearnerReducer(state: State  ,action: actions.TimeLearnerActions): State {
    switch(action.type) {
        case actions.Fetch_Questions: {
            console.log('fetchQuestions in Reducer');
            return {...state, isFetching: true, isSuccess: false };
        }        
        case actions.Fetch_Questions_Failure:
            return {...state, isFetching: false, isSuccess: false};
        case actions.Fetch_Questions_Success:
            return {...state, isFetching: false, isSuccess: true, version: action.payload.version, questions: action.payload.questions, currentQuestion: 0, score: 0};
        case actions.Select_Option: {
            let selectedOption = action.payload;
            
            // return summitAnswer(action.payload, getQuestion(state..questions, state.currentQuestion))
            //     ? {...state}
            //     : {...state}
            console.log(action.payload)
            return {...state}
        }
        default:
            return state;
    }
}

//default Selector
// export const getTimeLearnerSate = createFeatureSelector<State>('timelearner');

// export const{
//     selectIds,
//     selectEntities,
//     selectAll,
//     selectTotal
// } = timelearnerAdapter.getSelectors(getTimeLearnerSate);
