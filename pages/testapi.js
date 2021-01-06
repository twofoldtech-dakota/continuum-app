import useSWR from "swr";

export default function TestAPI() {
    const { data } = useSWR("/api/user");

    const { data: courses, mutate } = useSWR("/api/courses");

    return (
        <h1> Testing API Calls</h1>
    );
}

