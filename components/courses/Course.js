import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Moment from "moment";
import useSWR from "swr";

export default function Course({ course, courseDeleted, courseSaved }) {
    const router = useRouter();
    const { data } = useSWR("/api/user");

    const createUserCourse = async () => {
        try {
            await fetch("/api/createUserCourse", {
                method: "POST",
                body: JSON.stringify({
                    data,
                    course,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            courseSaved();
        } catch (err) {
            console.error(err);
        }
    };

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
                <tr>
                  <td width="60%">
                    <div className="upcomingp-courses-select">
                      <label className="check ">
                        <input type="checkbox" name="is_name" />
                        <span className="checkmark" />
                      </label>
                      <div className="text-box">
                        <h4> {course.data.name}</h4>
                        <p>{course.data.provider}</p>
                      </div>
                    </div>
                  </td>
                  <td>{Moment(course.data.date).format("MMMM d, yyyy")}</td>
                  <td><span>{course.data.hours}</span></td>
                  <td><img src="images/blank-star-icon.svg" alt="" /></td>
                  <td><a className="claim-btn" href="#">Claim</a></td>
                </tr>

        // <div className="bg-gray-100 p-4 rounded-md my-2 shadow-lg">
        //     <div className="flex items-center justify-between mb-2">
        //         <h2 className="text-xl text-gray-800 font-bold">
        //             {course.data.name}
        //         </h2>
        //         <span className="font-bold text-xs text-red-800 px-2 py-1 rounded-lg ">
        //             {course.data.provider}
        //         </span>
        //     </div>
        //     <p className="text-gray-900 mb-4">{course.data.governingAgency}</p>
        //     <p className="text-gray-900 mb-4">{course.data.hours}</p>
        //     <p className="text-gray-900 mb-4">
        //         {Moment(course.data.date).format("MMMM d, yyyy")}
        //     </p>
        //     <a className="text-gray-800 mr-2" onClick={createUserCourse}>
        //         Save
        //     </a>
        //     <button onClick={deleteCourse} className="text-gray-800 mr-2">
        //         Delete
        //     </button>
        // </div>
    );
}
