export interface TimeLearnerModel {
    version: string,
    questions: Question[]
}

interface Question {
    time_do_display: string,
    options: string[]
}