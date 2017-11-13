export interface TimeLearnerModel {
    version: string,
    questions: Question[]
}

export interface Question {
    time_do_display: string,
    options: string[]
}