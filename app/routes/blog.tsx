import { json, LinkDescriptor, LinksFunction } from "@remix-run/node";
import { Link, Links, useLoaderData } from "@remix-run/react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { Fragment, useEffect, useState } from "react";
import { database } from "~/providers/dbhook";
import Course from "~/types/course";
import fs from 'fs'
// generate blog styles with pdf page styles
// match them to the classes assgigned in Blog component
// blog page is a column flexbox
// containing a header and a content with a pdf file
// filling its center and a post with a header and content


export async function loader({ request }: { request: Request }) {
    const documents = await getDocs(collection(
        database,
        "courses",
    ))
    const data = documents.docs.map((doc) => doc.data() as Course);



    return json({ courses: data }, {
        headers: {
            "Cache-Control": "public, max-age=60",
        },
    });
}


export default function Blog() {

    const data = useLoaderData<typeof loader>();
    // pdf component
    const [pdf, setPdf] = useState<string | null>(null);
    const [pdfLoading, setPdfLoading] = useState(false);
    const [pdfError, setPdfError] = useState(null);

    // inner component to hold the courses  and display them
    // each course has a card with an image wrapping its top part
    // and the container is a grid with 3 columns
    const Courses = () => {
        return (
            <Fragment>
                <div className="blog__header">
                    <h1 className="blog__title">
                        קורסים - פיתוח אתרים
                    </h1>
                </div>
                <div className="blog__content__courses">
                    {data.courses.map((course) => (
                        <div className="blog__content__courses__course">
                            <div className="blog__content__courses__course__image">
                                <img src={course.courseImageURL} alt="course image" />
                            </div>
                            <div className="blog__content__courses__course__title">
                                {course.courseTitle}
                            </div>
                            <div className="blog__content__courses__course__description">
                                {course.courseSubtitle}
                            </div>
                            <Link to={`/course/${course.courseId}`}>
                                התחל קורס
                            </Link>
                        </div>
                    ))}
                </div>
            </Fragment>);
    };



    return <div className="blog__container">
        <Links />
        <Courses />
    </div>
}