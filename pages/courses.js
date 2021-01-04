import React, { useEffect, useState } from "react";
import Layout from "../components/shared/layout";
import Courses from "../components/courses/Courses";
import SavedCourses from "../components/courses/SavedCourses";
import ToggleCourses from "../components/courses/ToggleCourses";
import SearchIcon from "../components/svgs/searchIcon";
import Pagination from "../components/shared/pagination";
export default function Courses1() {
    const [activeComponent, setActiveComponent] = useState("courses");
    const [sortOption, setSortOption] = useState("DateDesc");

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const userData = {
        username: "dillonosmith",
        email: "dillon@twofold.tech",
        governingAgency: "The Governing Agency Test",
        savedCourses: [
          {
            name: "Saved Course 1",
            provider: {
              name: "American Home Shield",
              url: "http://www.google.com"
            },
            date: "05/29/2020",
            hours: 6,
            governingAgency: "Governing Agency Test",
            saved: true,
            /*owner: String!*/
            username: "dillonosmith",
          },
        ],
        name: "Dillon Smith",
        title: "Associate Broker",
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
                provider: {
                  name: "All Service Real Estate Academy",
                  url: "http://www.google.com"
                },
                date: "01/20/2022",
                hours: 12,
                governingAgency: "Governing Agency Test",
                description: "Credit description testing testing testing",
                credits: 12,
              },
              {
                name: "Testing Period 2",
                /*user: User! @relation*/
                provider: {
                  name: "All Service Real Estate Academy",
                  url: "http://www.google.com"
                },
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
                provider: {
                  name: "All Service Real Estate Academy",
                  url: "http://www.google.com"
                },
                date: "01/20/2020",
                hours: 12,
                governingAgency: "Governing Agency Test",
                description: "Credit description testing testing testing",
                credits: 12,
              },
              {
                name: "Credit testing",
                /*user: User! @relation*/
                provider: {
                  name: "Armburst Real Estate",
                  url: "http://www.google.com"
                },
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

      const coursesData = [
        {
          name: "Test course 1",
          provider: {
            name: "Provider 1 Testing",
            url: "http://www.google.com",
          },
          date: "12/30/2020",
          hours: 4,
          governingAgency: "Test Governing Agency",
          saved: false,
          description: "Test description 1",
        },
        {
          name: "Test course 2",
          provider: {
            name: "Provider 2 Testing",
            url: "http://www.google.com",
          },
          date: "2/31/2021",
          hours: 5,
          governingAgency: "Test Governing Agency 2",
          saved: false,
          description: "Test description 2",
        },
        {
          name: "Test course 3",
          provider: {
            name: "Provider 3 Testing",
            url: "http://www.google.com",
          },
          date: "1/29/2022",
          hours: 6,
          governingAgency: "Test Governing Agency 3",
          saved: true,
          description: "Test description 3",
        },
        {
          name: "Test course 4",
          provider: {
            name: "Provider 4 Testing",
            url: "http://www.google.com",
          },
          date: "1/30/2021",
          hours: 4,
          governingAgency: "Test Governing Agency 4",
          saved: false,
          description: "Test description 4",
        },
        {
          name: "Test course 5",
          provider: {
            name: "Provider 4 Testing",
            url: "http://www.google.com",
          },
          date: "1/12/2021",
          hours: 4,
          governingAgency: "Test Governing Agency 4",
          saved: false,
          description: "Test description 4",
        },
        {
          name: "Test course 6",
          provider: {
            name: "Provider 4 Testing",
            url: "http://www.google.com",
          },
          date: "3/12/2021",
          hours: 4,
          governingAgency: "Test Governing Agency 4",
          saved: false,
          description: "Test description 4",
        },
        {
          name: "Test course 8",
          provider: {
            name: "Provider 4 Testing",
            url: "http://www.google.com",
          },
          date: "6/30/2021",
          hours: 4,
          governingAgency: "Test Governing Agency 4",
          saved: false,
          description: "Test description 4",
        },
        {
          name: "Test course 7",
          provider: {
            name: "Provider 4 Testing",
            url: "http://www.google.com",
          },
          date: "1/15/2021",
          hours: 4,
          governingAgency: "Test Governing Agency 4",
          saved: false,
          description: "Test description 4",
        },
      ];

      useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          setPosts(sortCourses(coursesData));
          setLoading(false);
        }
        fetchPosts();
        
    //component updates if sort is updated
    }, [sortOption]);


    function sortCourses(courses){
      
    //sort results
    if (sortOption !== null && sortOption !== "" && sortOption !== undefined) {
      switch (sortOption) {
        case "DateDesc":
  
          return courses.sort(function (a, b) {
              return new Date(a.date) - new Date(b.date);
            }).reverse();
  
          break;
        case "DateAsc":
  
          return courses
              .sort(function (a, b) {
                return new Date(a.date) - new Date(b.date);
              });
          break;
        case "AZ":
  
          return courses.sort(function (a, b) {
              return a.name - b.name;
            });
  
          break;
        case "ZA":
  
          return courses
              .sort(function (a, b) {
                return a.name - b.name;
              })
              .reverse();
          break;
        case "CreditHours":
          return courses
              .sort(function (a, b) {
                return a.hours - b.hours;
              })
              .reverse();
  
          break;
        default:
          console.log("default");
      }
    
  }
  else{
      // This is for the upcoming courses on the homepage. This shows the 5 latest courses
      isShowingUpcomingCourses = true;
  
      var diffdate = new Date();
  
      var upcomingCourses =  courses.sort(function(a, b) {
          var distancea = Math.abs(diffdate - new Date(a.date));
          var distanceb = Math.abs(diffdate - new Date(b.date));
          return distancea - distanceb; // sort a before b when the distance is smaller
      });
      upcomingCourses = upcomingCourses.slice(0, 6);
      for (let index = 0; index < upcomingCourses.length; index++) {
          const course = posts[index];
  
          if(Date.parse(course.date) < Date.now()){
              delete posts[index];
          }
          
      }
  
  }
    }
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = pageNumber => setCurrentPage(pageNumber);

    
    function toggleList(name) {
        if (name === "courses") {
            setActiveComponent("courses");
        } else {
            setActiveComponent("savedCourses");
        }
    }
    
    function handleChange(sortOption) {
      
      setSortOption(sortOption);
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
                                        <a href="#">
                                            <SearchIcon />
                                        </a>
                                    </form>
                                </div>
                                <div className="credir-look-sort">
                                    <div className="continuum-select">
                                        <p>SORT BY </p>
                                        <select className="form-control" onChange={(e) => handleChange(e.currentTarget.value)} value={sortOption}>
                                            <option value="DateDesc">Date Descending</option>
                                            <option value="DateAsc">Date Ascending</option>
                                            <option value="AZ">A-Z</option>
                                            <option value="ZA">Z-A</option>
                                            <option value="CreditHours">Credit Hours</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* <Courses name="courses" /> */}
                            <ToggleCourses active={activeComponent}>
                                <Courses name="courses" posts={currentPosts} loading={loading}/>
                                <SavedCourses name="savedCourses" sort={sortOption}/>
                            </ToggleCourses>
                            
                            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage}/>
                               
                              
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

//export async function getServerSideProps(ctx) {
    //const token = getAuthCookie(ctx.req);

    //return { props: { token: token || null } };
//}
