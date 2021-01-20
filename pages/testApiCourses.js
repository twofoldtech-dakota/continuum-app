import useSWR from "swr";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactDOM from "react-dom";
import getCourses from "./api/getCoursesByGoverningAgency";
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function TestApiCourses() {
  //get the user objet and send the needed parameters to each api call
  //this works so use this for the courses page 
  const { data: courses, mutate, errors } = useSWR("/api/getCoursesByGoverningAgency?governingagency=Colorado Association of Realtors", fetcher);
  //const { data: courses, mutate, errors } = useSWR("/api/getCoursesByProvider?providername=360training.com Inc", fetcher);
 // const { data: courses, mutate, errors } = useSWR("/api/getCoursesByKeyword?keyword=Contracts", fetcher);

  
  useEffect(() => {

  }, [courses]);

  if(!courses){
    return <h1>data is loading</h1>
  }
  if(errors) console.log(errors);
  if(errors){
    return (
      <div>
      <h3>Your errors are </h3>
      <ul>
        {errors?.map((error) =>
          <li key={error}>{error}</li>
        )}
      </ul>
      </div>
    )
  }

  
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses ? courses.map((course) =>
          <li key={course.ts}>{course.data.name}</li>
        ) : ""}
        
      </ul>
    </div>
  );
  
}
