
export interface StackUserStatistics {
    questionsSolved: number,
    coursesSolved: number
    questionsCreated: number
    answers: number
}

export enum Status {
    SOLVED = 'solved',
    UNSOLVED = 'unsolved',
    INPROGRESS = 'inProgress'
}
export interface QuestionStatus {
    questionId: string
    status: Status
}

interface StackUser {
    uid:string
    email: string
    admin: boolean
    fullname: string
    phoneNumber: string
    questionStatus: QuestionStatus[]
    statistics: StackUserStatistics
    birthDate: string
    favoriteQuestionIds?: string[]
    prefferedLanguages?: string[]
    imageUrl?: string
}
export default StackUser