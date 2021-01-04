import React, { useEffect, useState } from "react";
import Layout from "../components/shared/layout";
import Credits from "../components/credits/Credits";
import LeftArrow from "../components/svgs/leftArrow";
import RightArrow2 from "../components/svgs/rightArrow2";
import SearchIcon from "../components/svgs/searchIcon";
import Pagination from "../components/shared/pagination";

export default function Credits1() {
    const [sortOption, setSortOption] = useState("DateDesc");
    const [selectedLicensurePeriod, setLicensurePeriod] = useState();
    const [selectedLicensurePeriodDropdown, setLicensurePeriodDropdown] = useState();
    const [activePage, setActivePage] = useState();

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);

    const licensurePeriods = [
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
            certificateImage: "testing image path name",
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
            certificateImage: "testing image path name 2",
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
            certificateImage: "testing image path name 3",
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
            certificateImage: "testing image path name 4",
          },
        ],
      },
    ];
    useEffect(() => {
      if (licensurePeriods[0] !== null) {
        setActiveCredits(licensurePeriods[0].startDate + "-" + licensurePeriods[0].endDate);
        setLicensurePeriod(licensurePeriods[0]);
        setLicensurePeriodDropdown(licensurePeriods[0].startDate + "-" + licensurePeriods[0].endDate)

      }

      const fetchPosts = async () => {
        setLoading(true);
        setPosts(sortCourses(licensurePeriods[0]?.credits));
        setLoading(false);
      }
      fetchPosts();
      
      console.log(posts);

  }, []);
  
  function sortCourses(credits){
    if (sortOption !== null && sortOption !== "" && sortOption !== undefined) {
      switch (sortOption) {
        case "DateDesc":
    
          return credits.sort(function (a, b) {
              return new Date(a.date) - new Date(b.date);
            }).reverse();
    
          break;
        case "DateAsc":
    
          return credits.sort(function (a, b) {
                return new Date(a.date) - new Date(b.date);
              });
          break;
        case "AZ":
    
          return credits.sort(function (a, b) {
              return a.name - b.name;
            });
    
          break;
        case "ZA":
    
          return credits.sort(function (a, b) {
                return a.name - b.name;
              })
              .reverse();
          break;
        case "CreditHours":
          return credits.sort(function (a, b) {
                return a.hours - b.hours;
              })
              .reverse();
    
          break;
        default:
          console.log("default");
      }
    
    }
  }

// Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//Change Page
const paginate = pageNumber => setCurrentPage(pageNumber);

  

  function setActiveCredits(licensurePeriod) {
    var startLicensureDate = "";
    var endLicensureDate = "";

    if (licensurePeriod !== undefined && licensurePeriod.indexOf("-") > -1) {
      var split = licensurePeriod.split("-");
      startLicensureDate = split[0];
      endLicensureDate = split[1];
    }

    licensurePeriods.forEach((period) => {
      if (
        period.startDate == startLicensureDate &&
        period.endDate == endLicensureDate
      ) {
        setLicensurePeriod(period);

      }
    });
    //loadCredits(credits, startLicensureDate, endLicensureDate);
  }

    function handleChange(sortOption) {
      
      setSortOption(sortOption);
    }
    function handleLicensureChange(event){
      setActiveCredits(event);
      setLicensurePeriodDropdown(event);
      
    }
    return (
        <Layout title="Continuum - Credits">
             <div className="title">
                            <h3>Continuing Education Credits</h3>
                            <div className="continuum-select-home">
                                <p>LICENSURE PERIOD </p>
                                <select className="form-control" onChange={(e) => handleLicensureChange(e.currentTarget.value)} value={selectedLicensurePeriodDropdown}>
                                {licensurePeriods && licensurePeriods.map((period) => (
                                  <option
                                    key={period.startDate}
                                    value={`${period.startDate}-${period.endDate}`}
                                  >
                                    {period.startDate} - {period.endDate}
                                  </option>
                                ))}
                                    
                                </select>
                            </div>
                        </div>  
                        <div className="upcoming-courses"> 
                            <div className="upcoming-courses-inner">
                                <div className="credir-look">
                                    <div className="credir-look-left">
                                        <form>
                                            <input type="text" className="form-control" placeholder="Look up a credit" />
                                            <a href=""><SearchIcon /></a>
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
                                
                                <Credits loading={loading} posts={currentPosts}/>

                                <div className="show-result">

                                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage}/>


                                {/* <p>Showing 20 of 248 results</p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <LeftArrow />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <RightArrow2 />
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                            </div>
                        </div>
                    

    </Layout>
    );
}
