import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Moment from "moment";

export default function SavedCourse({ course, courseDeleted }) {
    const router = useRouter();

    const deleteCourse = async () => {
        try {
            await fetch("/api/deleteCourse", {
                method: "DELETE",
                body: JSON.stringify({ id: course.id }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            courseDeleted();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="bg-gray-100 p-4 rounded-md my-2 shadow-lg">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl text-gray-800 font-bold">
                    {course.data.userCourse.name}
                </h2>
                <span className="font-bold text-xs text-red-800 px-2 py-1 rounded-lg ">
                    {course.data.userCourse.provider}
                </span>
            </div>
            <p className="text-gray-900 mb-4">
                {course.data.userCourse.governingAgency}
            </p>
            <p className="text-gray-900 mb-4">{course.data.userCourse.hours}</p>
            <p className="text-gray-900 mb-4">
                {Moment(course.data.userCourse.date).format("MMMM d, yyyy")}
            </p>
            <Link href={`/edit/${course.id}`}>
                <a className="text-gray-800 mr-2">claim</a>
            </Link>
            <button onClick={deleteCourse} className="text-gray-800 mr-2">
                Delete
            </button>
        </div>
    );
}
