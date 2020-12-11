import useSWR from "swr";
import Course from "./Course";

export default function Courses() {
    const { data: courses, mutate } = useSWR("/api/courses");

    return (
        <div className="table-responsive">
            <table>
                <tbody>
                    {courses &&
                        courses.map((course) => (
                            <Course
                                key={course.id}
                                course={course}
                                courseDeleted={mutate}
                                courseSaved={mutate}
                            />
                        ))}{" "}
                </tbody>
            </table>
        </div>
    );
}
