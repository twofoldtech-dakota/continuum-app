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
                        <h4>{course.data.name}</h4>
                        <p>{course.data.provider}</p>
                    </div>
                </div>
            </td>
            <td>{Moment(course.data.date).format("MMMM d, yyyy")}</td>
            <td>
                <span>{course.data.hours} hours</span>
            </td>
            <td>
                <img
                    src="images/blank-star-icon.svg"
                    onClick={createUserCourse}
                />
            </td>
            <td>
                <a className="claim-btn" href="#">
                    Claim
                </a>
            </td>
        </tr>
    );
}
