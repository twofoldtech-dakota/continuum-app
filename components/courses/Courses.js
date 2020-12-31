import useSWR from "swr";
import { useState, useEffect } from "react";

import Course from "./Course";
import CrossIcon from "../svgs/crossIcon";
import ExpendIcon from "../svgs/expendIcon";
import BlankStar from "../svgs/blankStar";
import FilledStar from "../svgs/filledStar";
import FileIcon from "../svgs/fileIcon";
import CalendarIcon from "../svgs/calendarIcon";
import RightArrow from "../svgs/rightArrow";
export default function Courses({ sort }) {
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
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [courseToView, setCourseToView] = useState(null);
var isShowingUpcomingCourses = false;
  var sortedCourses = [];
  useEffect(() => {

//component updates if sort is updated
}, [sort]);

if (sort !== null && sort !== "" && sort !== undefined) {
    switch (sort) {
      case "DateDesc":

      sortedCourses = 
          coursesData.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
          }).reverse();

        break;
      case "DateAsc":

      sortedCourses = 
          coursesData
            .sort(function (a, b) {
              return new Date(a.date) - new Date(b.date);
            });
        break;
      case "AZ":

      sortedCourses = 
          coursesData.sort(function (a, b) {
            return a.name - b.name;
          });

        break;
      case "ZA":

      sortedCourses =
          coursesData
            .sort(function (a, b) {
              return a.name - b.name;
            })
            .reverse();
        break;
      case "CreditHours":
        sortedCourses =
          coursesData
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

    sortedCourses = coursesData.sort(function(a, b) {
        var distancea = Math.abs(diffdate - new Date(a.date));
        var distanceb = Math.abs(diffdate - new Date(b.date));
        return distancea - distanceb; // sort a before b when the distance is smaller
    });
    sortedCourses = sortedCourses.slice(0, 6);
    for (let index = 0; index < sortedCourses.length; index++) {
        const course = sortedCourses[index];

        if(Date.parse(course.date) < Date.now()){
            delete sortedCourses[index];
        }
        
    }

}

  function showSlideOut(course) {
    setShowModal(true);
    setCourseToView(course);
  }

  function hideModal() {
    setShowModal(false);
    setShowSuccessModal(false);
  }

  function addToSavedCourses(course) {
    console.log("save course - " + course.name);
  }
  function unsaveCourse(course) {
    console.log("unsave course - " + course.name);
  }
  function saveCourse(course) {
    console.log("save");
    setShowModal(false);
    setShowSuccessModal(true);
  }

  return (
    <div>
      <div className="table-responsive">
        <table>
          <tbody>
            {sortedCourses &&
              sortedCourses.map((course) => (
                <tr key={course.name}>
                  <td width="60%">
                    <div className="upcomingp-courses-select">
                      <div className="text-box">
                        <h4>{course.name}</h4>
                        <p>{course.provider.name}</p>
                      </div>
                    </div>
                  </td>
                  <td>{course.date}</td>
                  <td>
                    <span>{course.hours}</span>
                  </td>
                  <td>
                    {course.saved ? (
                      <a href="#" onClick={() => unsaveCourse(course)}>
                        <FilledStar></FilledStar>
                      </a>
                    ) : (
                      <a href="#" onClick={() => addToSavedCourses(course)}>
                        <BlankStar></BlankStar>
                      </a>
                    )}
                  </td>
                  <td>
                    <a
                      className="claim-btn"
                      href="#"
                      onClick={() => showSlideOut(course)}
                    >
                      Claim
                    </a>
                  </td>
                </tr>
              ))}

{isShowingUpcomingCourses ? <tr><td colSpan="5"><a className="view-btn" href="/courses">View all courses&nbsp;<RightArrow /></a></td></tr> : ""}

          </tbody>
        </table>
      </div>

      <div
        className={showModal === true ? "overlay active" : "overlay"}
        onClick={() => hideModal()}
      ></div>
      <div
        className={
          showModal === true
            ? "credits-earned-modal credits-panel-modal active"
            : "credits-earned-modal credits-panel-modal"
        }
      >
        <div className="cross-icon">
          <a href="#" onClick={() => hideModal()}>
            <CrossIcon />
          </a>
        </div>
        <div className="text-box">
          <h3>Claim Credit Hours</h3>
          <p>{courseToView !== null ? courseToView.name : ""}</p>
          <a href={courseToView !== null ? courseToView.provider.url : ""}>
            {courseToView !== null ? courseToView.provider.name : ""}&nbsp;
            <ExpendIcon />
          </a>
        </div>
        <div className="panel-text">
          <h4>DESCRIPTION</h4>
          <p>{courseToView !== null ? courseToView.description : ""}</p>
          <span>CREDITS</span>
          <strong>
            {courseToView !== null ? courseToView.hours : ""} continuing
            education credit hours
          </strong>
        </div>
        <div className="calendar-text">
          <p>COURSE DATE</p>
          <div className="media">
            <form>
              <input
                type="text"
                className="form-control"
                id="startDate"
                placeholder="mm/dd/yyy"
              />
              <span>
                <CalendarIcon />
              </span>
            </form>
            <span>Select the date indicated on your certificate.</span>
          </div>
        </div>
        <div className="upload">
          <h4>UPLOAD CERTIFICATE</h4>
          <div className="upload-file">
            <label>
              {" "}
              <FileIcon /> <span>Select a file</span> from your computer
              <input type="file" size="60"></input>
            </label>
          </div>
        </div>
        <a
          className="save-btn"
          href="#"
          onClick={() => saveCourse(courseToView)}
        >
          Save & Claim Credits
        </a>
      </div>
      <div
        className={
          showSuccessModal === true ? "nice-job-modal active" : "nice-job-modal"
        }
      >
        <div className="cross-icon" onClick={() => hideModal()}>
          <a href="#">
            <CrossIcon />
          </a>
        </div>
        <div className="nice-job-text">
          <h2>Nice job!</h2>
          <p>Your credits have been saved to your profile.</p>
          <img
            src="../../styles/images/illo-success.png"
            alt=""
            className="img-fluid"
          />
        </div>
        <a className="save-btn" href="#" onClick={() => hideModal()}>
          Continue
        </a>
      </div>
    </div>
  );
}
