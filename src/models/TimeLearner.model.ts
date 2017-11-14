export interface TimeLearnerModel {
    version: string,
    questions: Question[]
}

export interface Question {
    time_do_display: string,
    options: string[]
}
//
// export class QuestionLearner {
//
//   private score: number = 0;
//   private currentQuestion: number = 0;
//   private questions: Question[];
//
//   constructor(public questions: Question[]) {
//     // this.score = 0;
//     // this.currentQuestion = 0;
//     this.questions = questions;
//   }
//   getQuestion(): Question {
//     return this.questions[currentQuestion];
//   }
//
//   summitAnswer(answer: string): boolean {
//     let currentQ: Question = getQuestion()
//     if(answer === currentQ.time_do_display) {
//       this.currentQuestion++;
//       this.score++;
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
