import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { collection, getDocs } from "firebase/firestore";
import React, { Fragment, useState } from "react";
import { database } from "~/providers/dbhook";
import Course from "~/types/course";
import GoogleAdsWrapper from '../components/GoogleAdsWrapper'


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
                    {React.Children.toArray(data.courses.map((course) => (
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
                    )))}
                </div>
            </Fragment>);
    };



    return <GoogleAdsWrapper>
        <div className="blog__container">
            <Courses />
        </div>
    </GoogleAdsWrapper>

}