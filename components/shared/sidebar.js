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
                        <a className="active" href="/">
                            <span>
                                <MdDashboard
                                    className="simple-state"
                                    size={30}
                                />
                                {/* <MdDashboard className="hover-state" size={32}/> */}
                            </span>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/credits">
                            <span>
                                <MdClass className="simple-state" size={30} />
                            </span>
                            Credits
                        </a>
                    </li>
                    <li>
                        <Link href="/courses">
                            <a>
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
                        <a href="/profile">
                            <span>
                                <FaUserCircle
                                    className="simple-state"
                                    size={30}
                                />
                            </span>
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="/settings">
                            <span>
                                <MdSettings
                                    className="simple-state"
                                    size={30}
                                />
                            </span>
                            Settings
                        </a>
                    </li>
                    <li>
                        <a onClick={logout} href="#">
                            <span>
                                <RiLogoutBoxRLine
                                    className="simple-state"
                                    size={30}
                                />
                            </span>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    
        <div className="mobile-navigation">
        <div className="navbar">
                
                        <a className="active" href="/">
                            <span>
                                <MdDashboard
                                    className="simple-state"
                                    size={30}
                                />
                                {/* <MdDashboard className="hover-state" size={32}/> */}
                            </span>
                            
                        </a>
                  
                        <a href="/credits">
                            <span>
                                <MdClass className="simple-state" size={30} />
                            </span>
                            
                        </a>
                   
                        <Link href="/courses">
                            <a>
                                <span>
                                    <FaBookOpen
                                        className="simple-state"
                                        size={30}
                                    />
                                </span>
                                
                            </a>
                        </Link>
                    
                        <a href="/profile">
                            <span>
                                <FaUserCircle
                                    className="simple-state"
                                    size={30}
                                />
                            </span>
                            
                        </a>
                        
                        <a href="/settings">
                            <span>
                                <MdSettings
                                    className="simple-state"
                                    size={30}
                                />
                            </span>
                            
                        </a>
                  
                        <a onClick={logout} href="#">
                            <span>
                                <RiLogoutBoxRLine
                                    className="simple-state"
                                    size={30}
                                />
                            </span>
                            
                        </a>
                   
                
                   
            </div>
       
        </div>
        </div>
    );
};

export default Sidebar;
