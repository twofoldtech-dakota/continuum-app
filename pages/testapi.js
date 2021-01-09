import useSWR from "swr";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactDOM from "react-dom";
import getCourses from "./api/getCourses";
export default function TestAPI() {
  // const router = useRouter();
  //const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data: courses, mutate } = useSWR("/api/getCourses");
  
  // const loadcourses = async () => {
  //     try {
  //         const res = await fetch('/api/getCourses');
  //         const links = await res.json();
  //         console.log(links);
  //     } catch (err) {
  //         console.error(err);
  //     }
  // };

  useEffect(() => {
    //loadcourses();

    //console.log("api page");
    //console.log(data ? data : "data is null or undefined");
  }, []);
  return <h1> Testing API Calls</h1>;
}
