import useSWR from "swr";
import Course from "../components/Course";

export default function Courses() {
    const { data: courses, mutate } = useSWR("/api/courses");

    return (
        <div>
            {courses &&
                courses.map((course) => (
                    <Course
                        key={course.id}
                        course={course}
                        courseDeleted={mutate}
                        courseSaved={mutate}
                    />
                ))}
        </div>
    );
}
