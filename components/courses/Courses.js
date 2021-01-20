import useSWR from "swr";
import { useState, useEffect } from "react";
import {useForm} from "react-hook-form";
import Course from "./Course";
import CrossIcon from "../svgs/crossIcon";
import ExpendIcon from "../svgs/expendIcon";
import BlankStar from "../svgs/blankStar";
import FilledStar from "../svgs/filledStar";
import FileIcon from "../svgs/fileIcon";
import CalendarIcon from "../svgs/calendarIcon";
import RightArrow from "../svgs/rightArrow";
export default function Courses({ posts, loading }) {
  
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [courseToView, setCourseToView] = useState(null);
  const { handleSubmit, register, watch, errors } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

var isShowingUpcomingCourses = false;
  useEffect(() => {
    
//component updates if sort is updated
}, [loading, posts]);


if(loading){
  return <h4>Loading...</h4>
}


const onSubmit = handleSubmit(async (formData) => {

  try {
      if(!formData.certificateImage){
          console.log("empty");
      }
      console.log(formData);
      
      //DO NOT REMOVE - if form validates and we update the credit successfully then we do this
      setShowModal(false);
      setShowSuccessModal(true);
      
  } catch (error) {
    console.error(error);
    setErrorMessage(error.message);
  }
});


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
 
  return (
    <div>
      <div className="table-responsive">
        <table>
          <tbody>
            {posts &&
              posts.map((course) => (
                <tr key={course.data.name}>
                  <td width="60%">
                    <div className="upcomingp-courses-select">
                      <div className="text-box">
                        <h4>{course.data.name}</h4>
                        <p>{course.data.provider}</p>
                      </div>
                    </div>
                  </td>
                  <td>{course.data.date}</td>
                  <td>
                    <span>{course.data.hours}</span>
                  </td>
                  <td>
                    {course.saved ? (
                      <a href="#" onClick={() => unsaveCourse(course.data)}>
                        <FilledStar></FilledStar>
                      </a>
                    ) : (
                      <a href="#" onClick={() => addToSavedCourses(course.data)}>
                        <BlankStar></BlankStar>
                      </a>
                    )}
                  </td>
                  <td>
                    <a
                      className="claim-btn"
                      href="#"
                      onClick={() => showSlideOut(course.data)}
                    >
                      Claim
                    </a>
                  </td>
                </tr>
              ))}
{isShowingUpcomingCourses ? <tr><td colSpan="5"><a className="view-btn" href="/courses">View all courses&nbsp;<RightArrow /></a></td></tr> : null}
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
        <form onSubmit={onSubmit}>
          <div className="text-box">
            <h3>Claim Credit Hours</h3>
            <p>{courseToView !== null ? courseToView.name : ""}</p>
            <a href="#">
              {courseToView !== null ? courseToView.provider : ""}&nbsp;
              <ExpendIcon />
            </a>
          </div>
          <div className="panel-text">
          
            <span>CREDITS</span>
            <strong>
              {courseToView !== null ? courseToView.hours : ""} continuing
              education credit hours
            </strong>
          </div>
          <div className="calendar-text">
            <p>COURSE DATE</p>
            <div className="media">
              <div>
              <input
                  type="text"
                  className="form-control"
                  name="date"
                  placeholder="mm/dd/yyy"
                  defaultValue={courseToView ? courseToView.date : "" }
                  ref={register({
                      required: "Course date is required.",
                    })}
                />
                <span>
                  <CalendarIcon />
                </span>
              </div>
              <span>Select the date indicated on your certificate.</span>
            </div>
            {errors.date && (
                          <span role="alert" className="form-error">
                            {errors.date.message}
                          </span>
                        )}
          </div>
          <div className="upload">
            <h4>UPLOAD CERTIFICATE</h4>
           
            <div className="upload-file">
              <label>
                {" "}
                <FileIcon /> <span>Select a file</span> from your computer
                <input type="file" size="60" name="certificateImage" ref={register({
                      required: "Certificate image is required.",
                    })}/>
              </label>
            </div>
            {errors.certificateImage && (
                          <span role="alert" className="form-error">
                            {errors.certificateImage.message}
                          </span>
                        )}
          </div>
          <input
            className="save-btn"
            type="submit"
            value="Save &amp; Claim Credits"
         />
        </form>
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
