import useSWR from "swr";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactDOM from "react-dom";
import getCourses from "./api/getCoursesByGoverningAgency";
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function TestApiCourses() {
  //this works so use this for the courses page //const { data: courses, mutate } = useSWR("/api/getCoursesByGoverningAgency", fetcher);
  const { data: courses, mutate } = useSWR("/api/getCoursesByProvider", fetcher);
  useEffect(() => {

  }, [courses]);

  if(!courses){
    return <h1>data is loading</h1>
  }

  const courseItems = courses ? courses.map((course) =>
    <li>{course.data.name}</li>
  ) : null;
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses?.map((course) =>
          <li key={course.ts}>{course.data.name}</li>
        )}
        
      </ul>
    </div>
  );
  
}
