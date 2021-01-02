import useSWR from "swr";
import { useState, useEffect } from "react";
import Link from "next/link";
import {useForm} from "react-hook-form";
import CrossIcon from "../svgs/crossIcon";
import ExpendIcon from "../svgs/expendIcon";
import CalendarIcon from "../svgs/calendarIcon";
import ImageIcon from "../svgs/ImageIcon";
import TrashIcon from "../svgs/TrashIcon";
import TickIcon from "../svgs/TickIcon";
import FileIcon from "../svgs/fileIcon";
export default function Courses({ sort, licensurePeriod }) {
  
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [creditToView, setCreditToView] = useState(null);
  const { handleSubmit, register, watch, errors } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    
}, [sort]);
    //keep this to send to the update method. This object is being updated. DO NOT ERASE!
  var creditToSave = {
    name: "",
    provider: {
      name: "",
      url: ""
    },
    date: "",
    hours: 0,
    governingAgency: "",
    description: "",
    credits: 0,
    certificateImage: "",
  };
  var sortedCredits = [];
  
  
    if (sort !== null && sort !== "" && sort !== undefined) {
      switch (sort) {
        case "DateDesc":
    
          sortedCredits = 
          licensurePeriod?.credits?.sort(function (a, b) {
              return new Date(a.date) - new Date(b.date);
            }).reverse();
    
          break;
        case "DateAsc":
    
          sortedCredits = 
          licensurePeriod?.credits?.sort(function (a, b) {
                return new Date(a.date) - new Date(b.date);
              });
          break;
        case "AZ":
    
          sortedCredits = 
          licensurePeriod?.credits?.sort(function (a, b) {
              return a.name - b.name;
            });
    
          break;
        case "ZA":
    
          sortedCredits =
          licensurePeriod?.credits?.sort(function (a, b) {
                return a.name - b.name;
              })
              .reverse();
          break;
        case "CreditHours":
          sortedCredits =
          licensurePeriod?.credits?.sort(function (a, b) {
                return a.hours - b.hours;
              })
              .reverse();
    
          break;
        default:
          console.log("default");
      }
    
    }
  


function removeImage(credit){
    creditToSave = {
        name: credit.name,
        /*user: User! @relation*/
        provider: {
        name: credit.provider.name,
        url: credit.provider.url
        },
        date: credit.date,
        hours: credit.hours,
        governingAgency: credit.governingAgency,
        description: credit.description,
        credits: credit.hours,
        certificateImage: "",
    }
    setCreditToView(creditToSave);
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


  function showSlideOut(credit) {
    setShowModal(true);
    setCreditToView(credit);
  }

  function hideModal(credit) {
    setShowModal(false);
    setShowSuccessModal(false);
    setCreditToView(credit);
  }

  return (
    <div>
      <div className="table-responsive">
        <table>
          <tbody>
            {sortedCredits &&
              sortedCredits.map((credit) => (
                <tr key={credit.name}>
                    <td width="60%">
                        <div className="upcomingp-courses-select">
                            
                            <div className="text-box">
                                <h4>{credit.name}</h4> 
                            </div>
                        </div>
                    </td>
                    <td>{credit.date}</td> 
                    <td><a className="time-btn" href="#"><TickIcon />&nbsp;&nbsp; {credit.hours} HOURS</a></td>
                    <td><a className="claim-btn" href="#" onClick={() => showSlideOut(credit)}>View</a></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div
        className={showModal === true ? "overlay active" : "overlay"}
        onClick={() => hideModal()}></div>
      <div
        className={
          showModal === true
            ? "credits-earned-modal credits-panel-modal active"
            : "credits-earned-modal credits-panel-modal"
        }
      >
        <div className="cross-icon">
          <a href="#" onClick={() => hideModal(creditToView)}>
            <CrossIcon />
          </a>
        </div>
        <form onSubmit={onSubmit}>
          <div className="text-box">
            <h3>Claim Credit Hours</h3>
            <p>{creditToView ? creditToView.name : ""}</p>
            <a href={creditToView ? creditToView.provider.url : ""}>
              {creditToView ? creditToView.provider.name : ""}&nbsp;
              <ExpendIcon />
            </a>
          </div>
          <div className="panel-text">
            <span>CREDITS</span>
            <strong>
              {creditToView ? creditToView.hours : ""} continuing
              education credit hours
            </strong>
          </div>
          <div className="calendar-text">
            <p>COMPLETED DATE</p>
            <div className="media">
  <div>
                <input
                  type="text"
                  className="form-control"
                  name="date"
                  placeholder="mm/dd/yyy"
                  defaultValue={creditToView ? creditToView.date : "" }
                  ref={register({
                      required: "Completed date is required.",
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
            <div className={creditToView && creditToView.certificateImage !== "" ? "upload-inner" : "hidden"}>
                      <a href="#"  onClick={() => removeImage(creditToView)}><p>
                          <ImageIcon />&nbsp;&nbsp;{creditToView ? creditToView.certificateImage : ""}</p>
                          <TrashIcon/>
                      </a>
                      <div className="image-holder">
                          <img src={creditToView ? creditToView.certificateImage : ""} alt="" className="img-fluid"></img>
                      </div>
                  </div>
                  
            <div className={creditToView && creditToView.certificateImage === "" ? "upload-file" : "hidden"}>
              <label>
                {" "}
                <FileIcon /> <span>Select a file</span> from your computer
                <input type="file" size="60" name="certificateImage" defaultValue={creditToView ? creditToView.certificateImage : "" } ref={creditToView && creditToView.certificateImage === "" ? register({
                      required: "Certificate image is required.",
                    }) : null}/>
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
            defaultValue="Save Changes"
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
          <p>Your changes have been saved.</p>
          
        </div>
        <a className="save-btn" href="#" onClick={() => hideModal()}>
          Close
        </a>
      </div>
    </div>
  );
}
