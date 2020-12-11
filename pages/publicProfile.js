import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Layout from "../components/shared/layout";
import PublicProfile from "../components/PublicProfile";
export default function PublicProfile() {
    const router = useRouter();

    const [errorMessage, setErrorMessage] = useState("");

    const { handleSubmit, register, errors } = useForm();

    return (
        <Layout title="Continuum - Profile">
           <PublicProfile />
        </Layout>
    );
}
