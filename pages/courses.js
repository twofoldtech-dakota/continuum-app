import React, { useEffect, useState } from "react";
import Layout from "../components/shared/layout";
import Courses from "../components/courses/Courses";
// import SavedCourses from "../components/courses/SavedCourses";
import ToggleCourses from "../components/courses/ToggleCourses";

export default function Courses1() {
    const [activeComponent, setActiveComponent] = useState("courses");
    const userData = {
        username: "dillonosmith",
        email: "dillon@twofold.tech",
        governingAgency: "The Governing Agency Test",
        savedCourses: [
          {
            name: "Saved Course 1",
            provider: "American Home Shield",
            date: "05/29/2020",
            hours: 6,
            governingAgency: "Governing Agency Test",
            saved: true,
            /*owner: String!*/
            username: "dillonosmith",
          },
        ],
        name: "Dillon Smith",
        title: "Associate Broker / Realtor",
        company: "compass Colorado",
        website: "https://www.twofold.tech/",
        bio:
          "Kate is an experienced realtor servicing both buyers and sellers throughout the Denver metro area. Skilled in negotiation, market trends/insights, and pricing strategy, she recognizes what a privilege it is to help her clients transition through such a monumental chapter of their lives. Kate aims to be your most valuable and reliable resource for any current and future real estate needs.",
        linkedin: "https://www.linkedin.com/in/dillonosmith/",
        zillow: "https://www.linkedin.com/in/dillonosmith/",
        twitter: "https://www.linkedin.com/in/dillonosmith/",
        instagram: "https://www.linkedin.com/in/dillonosmith/",
        facebook: "https://www.linkedin.com/in/dillonosmith/",
        theme: "purple",
        personalEmail: "dillon@twofold.tech",
        phone: "123-234-4432",
        officePhone: "939-999-9098",
        addressLine1: "123 Washington St",
        addressLine2: "apt b",
        city: "Kansas City",
        state: "MO",
        zip: "98767",
        licenseType: "Real Estate",
        licenseNumber: "FA.100069906",
        licensurePeriods: [
          {
            startDate: "12/01/2020",
            endDate: "11/30/2023",
            creditsEarned: 18,
            creditsRequired: 24,
            credits: [
              {
                name: "Testing Period",
                /*user: User! @relation*/
                provider: "All Service Real Estate Academy",
                date: "01/20/2022",
                hours: 12,
                governingAgency: "Governing Agency Test",
                description: "Credit description testing testing testing",
                credits: 12,
              },
              {
                name: "Testing Period 2",
                /*user: User! @relation*/
                provider: "All Service Real Estate Academy",
                date: "01/20/2022",
                hours: 6,
                governingAgency: "Governing Agency Test",
                description: "Credit description testing testing testing",
                credits: 6,
              },
            ],
          },
          {
            startDate: "12/01/2017",
            endDate: "11/30/2020",
            creditsEarned: 15,
            creditsRequired: 24,
            credits: [
              {
                name: "Fundamental Skills for Real Estate Agents",
                /*user: User! @relation*/
                provider: "All Service Real Estate Academy",
                date: "01/20/2020",
                hours: 12,
                governingAgency: "Governing Agency Test",
                description: "Credit description testing testing testing",
                credits: 12,
              },
              {
                name: "Credit testing",
                /*user: User! @relation*/
                provider: "Armburst Real Estate",
                date: "03/03/2020",
                hours: 3,
                governingAgency: "Governing Agency Test",
                description: "Credit 2 description testing testing testing",
                credits: 3,
              },
            ],
          },
        ],
        alerts: true,
        news: true,
        hideContactInfo: true,
        profileImage:
          "https://media-exp1.licdn.com/dms/image/C5603AQE1h32pUQ7UoQ/profile-displayphoto-shrink_200_200/0/1591127333018?e=1613001600&v=beta&t=-Pwl5i5ptqyxuy391LNHAWpCF4h38JJJAmckZKGdtjc",
        isRealtor: true,
      };
    
    const courses = {}
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
