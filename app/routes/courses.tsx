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
                <div key={course.courseId} className="card-normal w-5/6 mt-8 mb-8 rounded-sm overflow-hidden  drop-shadow-lg">
                    <div>
                        <img src={course.courseImageURL} className="image-full object-cover min-h-full pl-2 pr-2 max-h-72 mr-auto ml-auto" alt="course image" />
                        <label className={`
                             bg-white
                             text-blue-500 
                             drop-shadow-sm
                               card-title p-3
                                 border-black`}>
                            {course.courseTitle}
                        </label>
                    </div>
                    <div className="text-white
                     flex
                     card-body
                     bg-white
                      -mt-3">
                        <label className="text-white -mt-2 text-sm w-fit mr-auto float-left  bg-blue-500 font-bold p-2 text-center">
                            {course.courseSubject}
                        </label>

                        <label className="text-black font-semibold">
                            {"רמת קושי: " + course.level}
                        </label>

                        <label className="text-black">
                            {"מספר שיעורים: " + course.totalVideos}
                        </label>
                        <div className="flex justify-between w-full p-2">
                            <label className="text-black text-center text-sm font-bold" dir="rtl">
                                {course.coursePrice > 0 ? "מסלול פרו" : 'מסלול חינמי'}
                            </label>
                            <div className="flex flex-col">
                                <label className="text-black text-sm">150 ביקורות</label>
                                <div className={"flex justify-end"}>
                                    <span className="material-icons" style={{ color: 'gold' }}>star</span>
                                    <span className="material-icons" style={{ color: 'gold' }}>star</span>
                                    <span className="material-icons" style={{ color: 'gold' }}>star</span>
                                    <span className="material-icons" style={{ color: 'gold' }}>star</span>
                                    <span className="material-icons" style={{ color: 'gold' }}>star</span>
                                </div>
                            </div>
                        </div>

                        <a href="#" className="btn btn-primary bg-blue-500 text-lg hover:bg-blue-600">התחל</a>

                    </div>
                </div>))}
        </div>
    );
}