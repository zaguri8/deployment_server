export type FrontEndQuestion = {
    questionTitle: string,
    questionDifficulty: string
    questionContent: string,
    questionCodeTemplate?: string
    questionInstructionsInput: string,
    questionInstructionsOutput: string,
    returnType: string,
    input: QuestionInput[],
    extras?: QuestionExtras,
    id: string,
}
export type QuestionInput = {
    inputType: string
    inputName: string
    elementType: string
}
export interface QuestionExtras {
    solutionVideoURL: string,
    solutions: string[],
    clues: string[],
    questionId: string
}

export type QuestionTest = {
    input: any[],
    otherAcceptedAnswers?: any[]
    answer: any,
}
export type BackEndQuestion = {
    id: string,
    returnType: string,
    questionClassDefenition: string,
    extraInfo?: {
        isOrderMatters: boolean
    },
    input: QuestionInput[],
    tests: QuestionTest[]
}

export interface QuestionSubmissionForm {
    questionId: string,
    lang: string,
    code: string,
}
export interface QuestionSubmitResult {
    status: string
    message: string
}

export interface CodeEditorState {
    question: FrontEndQuestion | undefined
    questionSubmissionForm: QuestionSubmissionForm
}