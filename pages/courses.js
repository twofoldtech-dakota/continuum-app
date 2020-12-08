import React, { useEffect, useState } from "react";
import Layout from "../components/shared/layout";
import Courses from "../components/courses/Courses";
// import SavedCourses from "../components/courses/SavedCourses";
import ToggleCourses from "../components/courses/ToggleCourses";

export default function Courses1() {
    const [activeComponent, setActiveComponent] = useState("courses");

    function toggleList(name) {
        if (name === "courses") {
            setActiveComponent("courses");
        } else {
            setActiveComponent("savedCourses");
        }
    }

    return (
        <Layout title="Continuum - Courses">
            <div className="title">
                <h3>Available Courses</h3>
                <div className="all-courses">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${
                                    activeComponent === "savedCourses"
                                        ? ""
                                        : " active"
                                }`}
                                id="pills-home-tab"
                                data-toggle="pill"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                                onClick={() => toggleList("courses")}
                            >
                                All Courses
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${
                                    activeComponent != "savedCourses"
                                        ? ""
                                        : " active"
                                }`}
                                id="pills-profile-tab"
                                data-toggle="pill"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                                onClick={() => toggleList("savedCourses")}
                            >
                                Saved Courses
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tab-content" id="pills-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                >
                    <div className="upcoming-courses">
                        <div className="upcoming-courses-inner">
                            <div className="credir-look">
                                <div className="credir-look-left">
                                    <form>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Look up a credit"
                                        />
                                        <a href>
                                            <img
                                                src="images/search-icon.svg"
                                                alt
                                            />
                                        </a>
                                    </form>
                                </div>
                                <div className="credir-look-sort">
                                    <div className="continuum-select">
                                        <p>SORT BY </p>
                                        <select className="form-control">
                                            <option>Date Completed</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <ToggleCourses active={activeComponent}>
                                <Courses name="courses" />
                                {/* <SavedCourses name="savedCourses" /> */}
                            </ToggleCourses>
                            <div className="show-result">
                                <p>Showing 20 of 248 results</p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img
                                                src="images/left-arrow.svg"
                                                alt
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img
                                                src="images/right-arrow2.svg"
                                                alt
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps(ctx) {
    const token = getAuthCookie(ctx.req);

    return { props: { token: token || null } };
}
