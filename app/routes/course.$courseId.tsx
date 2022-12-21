import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { doc, getDoc } from "firebase/firestore";
import { json } from "react-router";
import { database } from "~/providers/dbhook";
import Course from "~/types/course";
export async function loader({ request, params }: LoaderArgs) {
    const id = params.courseId;
    if (id) {
        const docFile = await getDoc(doc(database, "courses", id))
        const course = docFile.data() as Course
        return json({
            course,
            headers: {
                "Cache-Control": "public, max-age=60",
            }
        })
    } else {
        throw new Response("No id provided", { status: 404 })
    }
}

export default function WatchCourse() {
    const data = useLoaderData<typeof loader>();
    return (
        <div className="course_container_details">
            <h1>{data.course.courseTitle}</h1>
            <div className="pdf_container">
            </div>
            <p>{data.course.courseDescription}</p>
        </div>
    )
}