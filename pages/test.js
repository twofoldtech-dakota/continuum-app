import Head from "next/head";
import useSWR from "swr";
import Link from "next/link";
import Courses from "../components/Courses";
import SavedCourses from "../components/SavedCourses";
import { getAuthCookie } from "../utils/auth-cookies";
import Layout from "../components/shared/layout";

export default function Test() {
    const { data } = useSWR("/api/user");

    return (
        <Layout title="Continuum - Dashboard">
            <Courses />
            <SavedCourses />
        </Layout>
    );
}

export async function getServerSideProps(ctx) {
    const token = getAuthCookie(ctx.req);

    return { props: { token: token || null } };
}
