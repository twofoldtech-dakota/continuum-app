import Head from "next/head";
import useSWR from "swr";
import Link from "next/link";
import SavedCourse from "../components/SavedCourse";

export default function Courses() {
    const { data: courses, mutate } = useSWR("/api/userCourses");
    console.log("courses");
    console.log(courses);
    return (
        <div>
            Saved Courses
            {courses &&
                courses.map((course) => (
                    <SavedCourse
                        key={course.id}
                        course={course}
                        courseDeleted={mutate}
                    />
                ))}
        </div>
    );
}
