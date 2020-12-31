import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Moment from "moment";
import useSWR from "swr";
import BlankStar from "../svgs/blankStar";
import FilledStar from "../svgs/filledStar";

export default function Course({ course, showModal, courseToView }) {
    const router = useRouter();
    const { data } = useSWR("/api/user");
   
    function showSlideOut(course) {
        showModal = true;
        courseToView = course;
      }
    
      function hideModal(){
        showModal = false;
      }

      function saveCourse(course){
        console.log("save course - " + course.name);
      }
     function unsaveCourse(course){
         console.log("unsave course - " + course.name);
    }
    return (
        <tr>
            <td width="60%">
            <div className="upcomingp-courses-select">
                <div className="text-box">
                <h4>{course.name}</h4>
                <p>{course.provider.name}</p>
                </div>
            </div>
            </td>
            <td>{Moment(course.date).format("MMMM d, yyyy")}</td>
            <td><span>{course.hours}</span></td>
            <td>
                {course.saved ? <a href="#" onClick={() => unsaveCourse(course)}><FilledStar></FilledStar></a> : <a href="#" onClick={() => saveCourse(course)}><BlankStar ></BlankStar></a>}
            </td>
            <td><a className="claim-btn" href="#" onClick={() => showSlideOut(course)}>Claim</a></td>
        </tr>
        
    );
    {/* // <div className="bg-gray-100 p-4 rounded-md my-2 shadow-lg">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl text-gray-800 font-bold">
                    {course.data.name}
                </h2>
                <span className="font-bold text-xs text-red-800 px-2 py-1 rounded-lg ">
                    {course.data.provider}
                </span>
            </div>
            <p className="text-gray-900 mb-4">{course.data.governingAgency}</p>
            <p className="text-gray-900 mb-4">{course.data.hours}</p>
            <p className="text-gray-900 mb-4">
                {Moment(course.data.date).format("MMMM d, yyyy")}
            </p>
            <a className="text-gray-800 mr-2" onClick={createUserCourse}>
                Save
            </a>
            <button onClick={deleteCourse} className="text-gray-800 mr-2">
                Delete
            </button>
        </div> */}
}
