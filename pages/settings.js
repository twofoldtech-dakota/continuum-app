import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const Settings = () => {
    const router = useRouter();

    const [errorMessage, setErrorMessage] = useState("");

    const { handleSubmit, register, watch, errors } = useForm();

    const onSubmit = handleSubmit(async (formData) => {
        if (errorMessage) setErrorMessage("");

        try {
            const res = await fetch("/api/register", {
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
        <div className="continuum-detail">
            <div className="title">
                <h3>Settings &amp; Preferences</h3>
                <a className="btn-default" href="#">
                    Save Changes
                </a>
            </div>
            <div className="setting-sec">
                <div className="setting-box">
                    <h4>Licensure Information</h4>
                    <form className="licensur-info">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>LICENSE TYPE</label>
                                    <select className="form-control">
                                        <option>Real Estate</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="form-group">
                                    <label>GOVERNING AGENCY</label>
                                    <select className="form-control">
                                        <option>
                                            Colorado Association of Realtors
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>CURRENT LICENSE EXPIRATION</label>
                                    <div className="calendar">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="startDate"
                                            placeholder="06/30/2020"
                                        />
                                        <span>
                                            <img
                                                src="images/calendar-icon.svg"
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="setting-box">
                    <h4>Social Media Links</h4>
                    <form className="social-info">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>LINKEDIN</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="http://linkedin.com/in/kate-jennings70"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>FACEBOOK</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="http://"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>TWITTER</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="http://"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="setting-box">
                    <h4>Login Credentials</h4>
                    <form className="social-info">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>USERNAME</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="kate.jennings70@gmail.com"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>PASSWORD</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="••••••••••"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <a className="reset-password" href="#">
                                        Reset password
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="setting-box">
                    <h4>Email Notifications</h4>
                    <div className="email-notification">
                        <ul>
                            <li>
                                <label className="check ">
                                    <input type="checkbox" name="is_name" />
                                    <span className="checkmark" />
                                </label>
                                <div className="text-box">
                                    <h5>Expiration Alerts</h5>
                                    <p>
                                        Send me reminders about how many credits
                                        I need as my expiration date gets near
                                    </p>
                                </div>
                            </li>
                            <li>
                                <label className="check ">
                                    <input type="checkbox" name="is_name" />
                                    <span className="checkmark" />
                                </label>
                                <div className="text-box">
                                    <h5>Continuum News</h5>
                                    <p>
                                        Send me updates about the company,
                                        product updates, and activity I missed
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Settings;

export async function getServerSideProps(ctx) {
    const token = getAuthCookie(ctx.req);

    return { props: { token: token || null } };
}
