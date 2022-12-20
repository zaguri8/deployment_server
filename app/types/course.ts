
interface Course {
    courseId: string
    courseSubject: string
    courseTitle: string
    courseSubtitle: string
    coursePreviewURL?: string
    courseImageURL?:string
    coursePrice: string | number
    totalVideos: string | number
    level: string | number
}


export default Course