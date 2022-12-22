import { json, LoaderArgs, LoaderFunction, Response } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { database } from "~/providers/dbhook";
import Course from "~/types/course";

export async function loader({ request }: LoaderArgs) {
    try {
        const courses = await getDocs(collection(database, "courses"));

        return json(
            courses.docs.map(doc => doc.data()) as Course[]
        )
    } catch (error) {
        console.log(error);
        throw new Response("Error", { status: 500 });
    }
}

// add tailwind css to the courses page


export default function Courses() {
    const courses = useLoaderData<typeof loader>();
    return (
        <div className="grid lg:grid-cols-2 place-items-center gap-5 bg-gray">
            {courses.map(course => (
                <div className="card-normal w-5/6 mt-8 mb-8 rounded-sm overflow-hidden  drop-shadow-lg">
                    <div>
                        <img src={course.courseImageURL} className="image-full object-cover min-h-full pl-4 pr-4" alt="course image" />
                        <label className={`
                             text-white
                             bg-orange-700 
                               card-title p-3
                                 border-black`}>
                            {course.courseTitle}
                        </label>
                    </div>
                    <div className="text-white
                     flex
                     card-body
                     bg-gray-900
                      -mt-3">
                        <label className="text-white -mt-2 text-sm w-fit mr-auto float-left  bg-gray-700 font-bold p-2 text-center">
                            {course.courseSubject}
                        </label>

                        <label className="text-white font-semibold">
                            {"רמת קושי: " + course.level}
                        </label>

                        <label className="text-white">
                            {"מספר שיעורים: " + course.totalVideos}
                        </label>
                        <div className="flex justify-between w-full p-2">
                            <label className="text-white text-center text-lg font-bold" dir="rtl">
                                {course.coursePrice + " ש\"ח"}
                            </label>
                            <div className={"flex justify-end"}>

                                <span className="material-icons" style={{ color: 'gold' }}>star</span>
                                <span className="material-icons" style={{ color: 'gold' }}>star</span>
                                <span className="material-icons" style={{ color: 'gold' }}>star</span>
                                <span className="material-icons" style={{ color: 'gold' }}>star</span>
                                <span className="material-icons" style={{ color: 'gold' }}>star</span>
                            </div>
                        </div>

                        <a href="#" className="btn btn-primary text-lg">התחל</a>

                    </div>
                </div>))}
        </div>
    );
}