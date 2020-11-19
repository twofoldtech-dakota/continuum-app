import React, { Component } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const Sidebar = () => {
    const router = useRouter();

    const fetcher = (url) => fetch(url).then((r) => r.json());

    const { data: user, mutate: mutateUser } = useSWR("/api/user", fetcher);

    const logout = async () => {
        const res = await fetch("/api/logout");
        if (res.ok) {
            mutateUser(null);
            router.push("/login");
        }
    };

    return (
        <div className="continuum-sidebar">
            <div className="side-header">
                <a href="#">
                    <img
                        src="/images/continuum-sidebar-logo.svg"
                        alt=""
                        className="img-fluid"
                    />
                </a>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <a className="active" href="/">
                            <span>
                                <img
                                    className="simple-state"
                                    src="images/dashboard-icon.svg"
                                    alt=""
                                />
                                <img
                                    className="hover-state"
                                    src="images/dashboard-icon-hover.svg"
                                    alt=""
                                />
                            </span>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/credits">
                            <span>
                                <img
                                    className="simple-state"
                                    src="images/credits-icon.svg"
                                    alt=""
                                />
                                <img
                                    className="hover-state"
                                    src="images/credits-icon-hover.svg"
                                    alt=""
                                />
                            </span>
                            Credits
                        </a>
                    </li>
                    <li>
                        <a href="/courses">
                            <span>
                                <img
                                    className="simple-state"
                                    src="images/courses-icon.svg"
                                    alt=""
                                />
                                <img
                                    className="hover-state"
                                    src="images/courses-icon-hover.svg"
                                    alt=""
                                />
                            </span>
                            Courses
                        </a>
                    </li>
                    <li>
                        <a href="/profile">
                            <span>
                                <img
                                    className="simple-state"
                                    src="images/profile-icon.svg"
                                    alt=""
                                />
                                <img
                                    className="hover-state"
                                    src="images/profile-icon-hover.svg"
                                    alt=""
                                />
                            </span>
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="/settings">
                            <span>
                                <img
                                    className="simple-state"
                                    src="images/setting-icon.svg"
                                    alt=""
                                />
                                <img
                                    className="hover-state"
                                    src="images/setting-icon-hover.svg"
                                    alt=""
                                />
                            </span>
                            Settings
                        </a>
                    </li>
                    <li>
                        <a onClick={logout} href="#">
                            <span>
                                <img
                                    className="simple-state"
                                    src="images/setting-icon.svg"
                                    alt=""
                                />
                                <img
                                    className="hover-state"
                                    src="images/setting-icon-hover.svg"
                                    alt=""
                                />
                            </span>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
