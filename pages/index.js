import Head from "next/head";
import useSWR from "swr";
import Link from "next/link";
import Courses from "../components/courses/Courses";
import { getAuthCookie } from "../utils/auth-cookies";
import Layout from "../components/shared/layout";

export default function Home() {
    const { data } = useSWR("/api/user");

    const { data: courses, mutate } = useSWR("/api/courses");

    return (
        <Layout title="Continuum - Dashboard">
            <Courses />
        </Layout>
    );
}

export async function getServerSideProps(ctx) {
    const token = getAuthCookie(ctx.req);

    return { props: { token: token || null } };
}
