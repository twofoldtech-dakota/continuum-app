import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Courses from "../components/courses/Courses";
import { getAuthCookie } from "../utils/auth-cookies";
import Layout from "../components/shared/layout";
import Graphs from "../components/home/graphs";
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
    //const { data } = useSWR("/api/user");

    const { data: courses, mutate, errors } = useSWR("/api/getCoursesByGoverningAgency?governingagency=Colorado Association of Realtors", fetcher);
    useEffect(() => {
        
    //component updates if sort is updated
    }, [courses]);
    return (
        <Layout title="Continuum - Dashboard">
           <Graphs />
           <div className="upcoming-courses">
  <h3>Upcoming Available Courses</h3>
  <div className="upcoming-courses-inner">
    <div className="table-responsive">
    <Courses name="courses" posts={courses}/>   </div>
  </div>
</div>
           
        </Layout>
    );
}

export async function getServerSideProps(ctx) {
    const token = getAuthCookie(ctx.req);

    return { props: { token: token || null } };
}
