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
        <tr>
            <td width="60%">
                <div className="upcomingp-courses-select">
                    <label className="check ">
                        <input type="checkbox" name="is_name" />
                        <span className="checkmark" />
                    </label>
                    <div className="text-box">
                        <h4>{course.data.userCourse.name}</h4>
                        <p>{course.data.userCourse.provider}</p>
                    </div>
                </div>
            </td>
            <td>
                {Moment(course.data.userCourse.date).format("MMMM d, yyyy")}
            </td>
            <td>
                <span>{course.data.userCourse.hours} hours</span>
            </td>
            <td>
                <img src="images/blank-star-icon.svg" />
            </td>
            <td>
                <a className="claim-btn" href="#">
                    Claim
                </a>
            </td>
        </tr>
    );
}
