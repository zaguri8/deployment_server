import Course from "./course"

export interface CourseInfo {
    courseId: string,
    courseContents: (string | undefined)[],
    chapterList: (string | undefined)[],
    numberOfVideos: number
    recommendations: (string | undefined)[],
    aboutTheCourse: string
}
export interface CossciVideoResources {
    varArg1: any
}
export interface CossciVideo {
    resources?: CossciVideoResources[],
    video: string
    videoTitle:string
    videoSubtitle:string
}
export interface CossciChapter {
    chapterTitle: string,
    chapterSubTitle?: string
    videos: CossciVideo[]
}

export interface CossciChapterList {
    courseId: string
    chapters: CossciChapter[]
}
export type CoursePageProps = {
    course: Course,
    courseInfo: CourseInfo
}
export type CourseWatchProps = {
    course: Course,
    chapterList: CossciChapterList
}