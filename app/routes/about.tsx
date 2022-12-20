import { json } from "@remix-run/node";
import { Link, Links, useLoaderData } from "@remix-run/react";
import { FunctionComponent, ReactNode } from "react";
import Searchbar from "~/components/searchBar";
type CoursesWrapperProps = { courses: Course[] }
interface Course {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

const CoursesWrapper = (CoursesComponent : FunctionComponent<CoursesWrapperProps>) => {
    return function () {
        const data = useLoaderData<Course[]>()
        return <CoursesComponent courses={data} />
    }
}

const Courses = ({ courses }: CoursesWrapperProps) => {
    return <div className="courses__container">
        {courses.map((course) => (
            <div className="card" key={course.id}>
                <img src={course.image
                } alt={course.name} />
                <p className="card__title">{course.name}</p>
                <p>{course.description}</p>
            </div>))}
    </div>
}
const CoursesComponent = CoursesWrapper(Courses)


export default function About() {
    return <div>
        <div className="header">  About title  </div>
        <div className="content">  About content  </div>
        <Link to="/home">Home ?</Link>
        <CoursesComponent/>
    </div>
}