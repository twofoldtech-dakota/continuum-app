import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function Login() {
    const router = useRouter();

    const [errorMessage, setErrorMessage] = useState("");

    const { handleSubmit, register, errors } = useForm();

    const onSubmit = handleSubmit(async (formData) => {
        if (errorMessage) setErrorMessage("");

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push("/");
            } else {
                throw new Error(await res.text());
            }
        } catch (error) {
            console.error(error);
            setErrorMessage(error.message);
        }
    });

    return (
        <div className="sign-in-page">
            <div className="sign-in-sec">
                <div className="sing-in-inner">
                    <div className="logo">
                        <a href="#">
                            <img
                                src="images/sign-in-logo.svg"
                                alt=""
                                className="img-fluid"
                            />
                        </a>
                    </div>
                    <div className="text-box">
                        <h2>Hello!</h2>
                        <h3>Have we met before?</h3>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>EMAIL</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="name@mail.com"
                                ref={register({
                                    required: "Email is required",
                                })}
                            />
                            {errors.email && (
                                <span role="alert">{errors.email.message}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>PASSWORD</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="•••••••••••••••"
                                ref={register({
                                    required: "Password is required",
                                })}
                            />
                            {errors.password && (
                                <span role="alert">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btn btn-default"
                                defaultValue="Sign In"
                            />
                        </div>
                        <div className="form-group">
                            <p>
                                <a href="#">Forgot my password</a>
                                <br />
                                Don’t have an account?{" "}
                                <a href="/register">Sign up</a>
                            </p>
                        </div>
                    </form>
                    {errorMessage && <p role="alert">{errorMessage}</p>}
                </div>
            </div>
        </div>
    );
}
