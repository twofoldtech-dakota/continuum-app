import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import BlankStar from "../svgs/blankStar";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function SaveCourseButton({course, user}) {

    

    function addToSavedCourses(courseToSave, userData) {
        
        console.log("save course - " + courseToSave.data.name);
        console.log("save course - " + courseToSave.data.provider);
        console.log("save course - " + new Date().toLocaleDateString());
        console.log("save course - " + courseToSave.data.hours);
        console.log("save course - " + courseToSave.data.governingAgency);
        //saved
        //owner
        console.log("username - " + userData.username);
        // //description
        console.log("user - ");
        console.log(userData);
        console.log("save course - " + courseToSave.data.contactName);
        console.log("save course - " + courseToSave.data.contactPhone);
        console.log("save course - " + courseToSave.data.name);
    
        //setCourseToSave(course);
        useSWR(`/api/saveCourse/${userData.name}/${courseToSave}`, fetcher);
        //const { data: savedCourse, mutate: mutateUser } = useSWR("/api/saveCourse", fetcher);
        console.log("Save Course BUtton");
    
        console.log("Data is done - " + courseToSave);
      }

    return (
        <button className="toggleStar" type="submit" onClick={() => addToSavedCourses(course, user)}><BlankStar></BlankStar></button>

    );

}
