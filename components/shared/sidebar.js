import React, { Component } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import { MdDashboard } from "react-icons/md";
import { MdClass } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import SideBarLogo from "../svgs/sidebarlogo";
import { useState, useEffect } from "react";

const Sidebar = () => {
    const router = useRouter();
    const [activeUrl, setActiveUrl] = useState();

    const fetcher = (url) => fetch(url).then((r) => r.json());

    const { data: user, mutate: mutateUser } = useSWR("/api/user", fetcher);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setActiveUrl(window.location.pathname);
        }
        
      }, []);

    
    const logout = async () => {
        const res = await fetch("/api/logout");
        if (res.ok) {
            mutateUser(null);
            router.push("/login");
        }
    };

    function setActive(event){
        setActiveUrl(event);
        console.log(event);
    }

    return (
        <div>
        <div className="continuum-sidebar">
            <div className="side-header">
                <a href="#">
                    <SideBarLogo className="img-fluid" />
                </a>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                    <Link href="/" >
                        <a className={activeUrl === "/" ? "active" : ""} onClick={() => setActive("/")}>
                            <span>
                                <MdDashboard
                                    className="simple-state"
                                    size={30}
                                />
                                {/* <MdDashboard className="hover-state" size={32}/> */}
                            </span>
                            Home
                        </a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/credits">
                        <a className={activeUrl === "/credits" ? "active" : ""} onClick={() => setActive("/credits")}>
                            <span>
                                <MdClass className="simple-state" size={30} />
                            </span>
                            Credits
                        </a>
                    </Link>
                    </li>
                    <li>
                        <Link href="/courses">
                            <a className={activeUrl === "/courses" ? "active" : ""} onClick={() => setActive("/courses")}>
                                <span>
                                    <FaBookOpen
                                        className="simple-state"
                                        size={30}
                                    />
                                </span>
                                Courses
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href="/profile">
                        <a className={activeUrl === "/profile" ? "active" : ""} onClick={() => setActive("/profile")}>
                            <span>
                                <FaUserCircle
                                    className="simple-state"
                                    size={30}
                                />
                            </span>
                            Profile
                        </a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/settings">
                        <a className={activeUrl === "/settings" ? "active" : ""} onClick={() => setActive("/settings")}>
                            <span>
                                <MdSettings
                                    className="simple-state"
                                    size={30}
                                />
                            </span>
                            Settings
                        </a>
                    </Link>
                    </li>
                    <li>
                    <Link href="#" onClick={logout}>
                        <a>
                            <span>
                                <RiLogoutBoxRLine
                                    className="simple-state"
                                    size={30}
                                />
                            </span>
                            Logout
                        </a>
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    
        <div className="mobile-navigation">
        <div className="navbar">
        <Link href="/">
                        <a className={activeUrl === "/" ? "active" : ""} onClick={() => setActive("/")}>
                            <span>
                                <MdDashboard
                                    className="simple-state"
                                    size={30}
                                />
                                {/* <MdDashboard className="hover-state" size={32}/> */}
                            </span>
                            
                        </a></Link>
                        <Link href="/credits">
                        <a className={activeUrl === "/settings" ? "active" : ""} onClick={() => setActive("/credits")}>
                            <span>
                                <MdClass className="simple-state" size={30} />
                            </span>
                            
                        </a>
                        </Link>
                        <Link href="/courses">
                            <a className={activeUrl === "/courses" ? "active" : ""} onClick={() => setActive("/courses")}>
                                <span>
                                    <FaBookOpen
                                        className="simple-state"
                                        size={30}
                                    />
                                </span>
                                
                            </a>
                        </Link>
                        <Link href="/profile">
                        <a className={activeUrl === "/profile" ? "active" : ""} onClick={() => setActive("/profile")}>
                            <span>
                                <FaUserCircle
                                    className="simple-state"
                                    size={30}
                                />
                            </span>
                            
                        </a></Link>
                        <Link href="/settings">
                        <a className={activeUrl === "/settings" ? "active" : ""} onClick={() => setActive("/settings")}>
                            <span>
                                <MdSettings
                                    className="simple-state"
                                    size={30}
                                />
                            </span>
                            
                        </a></Link>
                        <Link href="/settings">
                        <a onClick={logout} href="#">
                            <span>
                                <RiLogoutBoxRLine
                                    className="simple-state"
                                    size={30}
                                />
                            </span>
                            
                        </a>
                        </Link>
                
                   
            </div>
       
        </div>
        </div>
    );
};

export default Sidebar;
