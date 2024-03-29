import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Layout from "../components/shared/layout";
import { RiDeleteBin6Line } from "react-icons/ri";
import LicensurePeriod from "../components/settings/licensurePeriods";
const Settings = () => {
  const router = useRouter();

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

  const [errorMessage, setErrorMessage] = useState("");
  const [licensureErrorMessage, setLicensureErrorMessage] = useState("");
  const [licensurePeriods, setLicensurePeriods] = useState(userData.licensurePeriods);
  const { handleSubmit, register, watch, errors } = useForm();

  //compares our existing userData.LicensurePeriods to what is being submitted on the form and returning the unique entries
  function comparer(otherArray) {
    return function (current) {
      return (
        otherArray.filter(function (other) {
          return (
            other.startDate == current.startDate &&
            other.endDate == current.endDate
          );
        }).length == 0
      );
    };
  }
  function comparer2(otherArray) {
    return function (current) {
      return (
        otherArray.filter(function (other) {
          return (
            other.startDate == current.startDate &&
            other.endDate == current.endDate
          );
        }).length == 1
      );
    };
  }
  const onSubmit = handleSubmit(async (formData) => {
    // check and loop through all licensure periods and make sure there are no blank fields and make sure the start date is less than the end date.
    // if we find a blank field or an end date that is before the start date then show general error message at top of box
    var startLicensurePeriods = [];
    var endLicensurePeriods = [];
    var finalPeriods = [];

    console.log(licensurePeriods);

    if (licensureErrorMessage) setLicensureErrorMessage("");
    try {
      document.querySelectorAll(".periods > .licensure-row > .start").forEach(function (el) {
        if (el.value !== "") {
          startLicensurePeriods.push(el.value);
        } else {
          setLicensureErrorMessage(
            "Please ensure there are no empty start dates"
          );
        }
      });
      document.querySelectorAll(".periods > .licensure-row > .end").forEach(function (el) {
        if (el.value !== "") {
          endLicensurePeriods.push(el.value);
        } else {
          setLicensureErrorMessage(
            "Please ensure there are no empty end dates"
          );
        }
      });
      var newPeriods = startLicensurePeriods.map(
        (e, i) => e + "-" + endLicensurePeriods[i]
      );
      if (newPeriods.length) {
        for (let index = 0; index < newPeriods.length; index++) {
          const newPeriod = newPeriods[index];
          var startDate = newPeriod.split("-")[0];
          var endDate = newPeriod.split("-")[1];
          let period = {
            startDate: startDate,
            endDate: endDate,
            creditsEarned: 0,
            creditsRequired: 24,
            credits: [],
          };

          finalPeriods.push(period);
        }
      }
      var onlyInLicensurePeriods = licensurePeriods.filter(
        comparer2(finalPeriods)
      );
      var onlyInNewPeriods = finalPeriods.filter(
        comparer(licensurePeriods)
      );
      console.log(finalPeriods);
console.log(onlyInLicensurePeriods);
console.log(onlyInNewPeriods);

      var results = onlyInLicensurePeriods.concat(onlyInNewPeriods);

      if (results.length) {
        //setLicensurePeriods(results);
        //We will save results to the db for the user.licensurePeriods
        console.log("final");
        console.log(results);
      }
      if (errorMessage) setErrorMessage("");

//do rest of code here

    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  });

  function addPeriod() {
    //var test = <LicensurePeriod/>;
    let newPeriod =
      // '<div class="calendar licensure-row"> <input type="text" placeholder="mm/dd/yyyy" name="licensureStartDate" class="form-control start" ><span><img src="images/calendar-icon.svg" alt=""></span><input type="text" placeholder="mm/dd/yyyy" name="licensureEndDate" class="form-control end" ><span class="delete"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="delete" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z"></path></g></svg></span><span class="save"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="save" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"></path></svg></span><hr class="divider"></div>';
      '<div class="calendar licensure-row"> <input type="text" placeholder="mm/dd/yyyy" name="licensureStartDate" class="form-control start" ><span><img src="images/calendar-icon.svg" alt=""></span><input type="text" placeholder="mm/dd/yyyy" name="licensureEndDate" class="form-control end" ><span class="delete" onclick="removePeriod"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="delete" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z"></path></g></svg></span><hr class="divider"></div>';

    
    // Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
//if ('content' in document.createElement('template')) {

//   // Instantiate the table with the existing HTML tbody
//   // and the row with the template
var periodsContianer = document.querySelector("#periods");
//   var template = document.querySelector('#periodTemplate');

//   // Clone the new row and insert it into the table
//   var clone = template.content.cloneNode(true);
//   console.log(template);
console.log(<LicensurePeriod />);
periodsContianer.insertAdjacentHTML('beforeend', newPeriod);

   //}
}

  function removePeriod(startDate, endDate) {
var licensurePeriodsToSave = [];
    
    for (let index = 0; index < licensurePeriods.length; index++) {
      const periodToKeep = licensurePeriods[index];

      if(periodToKeep.startDate !== startDate && periodToKeep.endDate !== endDate){
        licensurePeriodsToSave.push(periodToKeep);
      }
      
    }
    if(licensurePeriodsToSave.length){
      setLicensurePeriods(licensurePeriodsToSave);
    }
    
   
  }

  return (

   

    <Layout title="Continuum - Settings">
      <div className="continuum-detail">
        <form onSubmit={onSubmit}>
          <div className="title">
            <h3>Settings &amp; Preferences</h3>
            <input
              className="btn-default"
              type="submit"
              defaultValue="Save Changes"
            />
          </div>
          <div className="setting-sec">
            <div className="setting-box">
              <h4>Licensure Information</h4>
              <div className="licensur-info">
                <div className="row">
                  <div className="col-md-2">
                    <div className="form-group">
                      <label>LICENSE TYPE</label>
                      <select
                        className="form-control"
                        name="licenseType"
                        defaultValue={userData.licenseType}
                        ref={register({
                          required: "License type is required",
                        })}
                      >
                        <option>Real Estate</option>
                        <option>Test License</option>
                      </select>
                      {errors.licenseType && (
                        <span role="alert" class="form-error">
                          {errors.licenseType.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>GOVERNING AGENCY</label>
                      <select
                        className="form-control"
                        name="governingAgency"
                        defaultValue={userData.governingAgency}
                        ref={register({
                          required: "Governing agency is required",
                        })}
                      >
                        <option>Colorado Association of Realtors</option>
                        <option>Test Governing Association</option>
                      </select>
                      {errors.governingAgency && (
                        <span role="alert" class="form-error">
                          {errors.governingAgency.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>LICENSE NUMBER</label>
                      <div className="calendar">
                        <input
                          type="text"
                          name="licenseNumber"
                          className="form-control"
                          defaultValue={userData.licenseNumber}
                          ref={register({
                            required: "License number is required",
                          })}
                        />
                        {errors.licenseNumber && (
                          <span role="alert" class="form-error">
                            {errors.licenseNumber.message}
                          </span>
                        )}

                        
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 realtor">
                    <div className="form-group">
                      <label className="check ">
                        <input
                          type="checkbox"
                          name="isRealtor"
                          className="form-control checkbox"
                          defaultValue={userData.isRealtor}
                          defaultChecked={userData.isRealtor}
                        ></input>
                        <span className="checkmark" />
                      </label>
                      <div className="text-box">
                        <p>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am a Realtor
                          <sup>&#174;</sup>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="setting-box">
              <h4>Licensure Periods</h4>
              <div className="licensur-info">
                <div className="row">
                  <div className="col-md-6">
                    {licensureErrorMessage && (
                      <span role="alert" className="form-error">
                        {licensureErrorMessage}
                      </span>
                    )}
                    <div className="form-group periods" id="periods">

                      <label className="start-label">STARTS</label>
                      <label className="end-label">ENDS</label>
                      {licensurePeriods.map((period) => (
                        <div
                          className="calendar licensure-row"
                          key={period.startDate}
                        >
                          <input
                            type="text"
                            name="licensureStartDate"
                            className="form-control start"
                            defaultValue={period.startDate}
                            ref={register({
                              required: "Start date is required",
                            })}
                          />
                          {errors.startDate && (
                            <span role="alert" className="form-error">
                              {errors.startDate.message}
                            </span>
                          )}
                          <span>
                            <img src="images/calendar-icon.svg" alt="" />
                          </span>
                          <input
                            type="text"
                            name="licensureEndDate"
                            className="form-control end"
                            defaultValue={period.endDate}
                            ref={register({
                              required: "End date is required",
                            })}
                          />
                          {errors.endDate && (
                            <span role="alert" className="form-error">
                              {errors.endDate.message}
                            </span>
                          )}
                          <span className="delete" onClick={() => removePeriod(period.startDate, period.endDate)}>
                            <RiDeleteBin6Line className="delete"></RiDeleteBin6Line>
                          </span>
                          {/* <span className="save" onClick={savePeriod}>
                            <FaRegSave className="save"></FaRegSave>
                          </span> */}
                          <hr className="divider" />
                        </div>
                      ))}
                    </div>
                    <span className="add-period" onClick={addPeriod}>
                      Add Licensure Period
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="setting-box">
              <h4>Social Media Links</h4>
              <div className="social-info">
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>LINKEDIN</label>
                      <input
                        type="text"
                        name="linkedin"
                        className="form-control"
                        placeholder="https://www.linkedin.com/in/username/"
                        defaultValue={userData.linkedin}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>FACEBOOK</label>
                      <input
                        type="text"
                        name="facebook"
                        className="form-control"
                        placeholder="https://www.facebook.com/username"
                        defaultValue={userData.facebook}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>TWITTER</label>
                      <input
                        type="text"
                        name="twitter"
                        className="form-control"
                        placeholder="https://www.twitter.com/username/"
                        defaultValue={userData.twitter}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>ZILLOW</label>
                      <input
                        type="text"
                        name="zillow"
                        className="form-control"
                        placeholder="https://www.zillow.com/username/"
                        defaultValue={userData.zillow}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="setting-box">
              <h4>NETWORK</h4>
              <div className="social-info">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>USERNAME</label>
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        defaultValue={userData.username}
                      />
                    </div>
                  </div>
                  {/* <div className="col-md-4">
                    <div className="form-group">
                      <label>PASSWORD</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="••••••••••"
                      />
                    </div>
                  </div> 
                  <div className="col-md-4">
                    <div className="form-group">
                      <a className="reset-password" href="#">
                        Reset password
                      </a>
                    </div>
                  </div>*/}
                </div>
              </div>
            </div>

            <div className="setting-box">
              <h4>Email Notifications</h4>
              <div className="email-notification">
                <ul>
                  <li>
                    <label className="check ">
                      <input
                        type="checkbox"
                        name="alerts"
                        className="form-control checkbox"
                        defaultValue={userData.alerts}
                        defaultChecked={userData.alerts}
                      ></input>
                      <span className="checkmark" />
                    </label>
                    <div className="text-box">
                      <h5>Expiration Alerts</h5>
                      <p>
                        Send me reminders about how many credits I need as my
                        expiration date gets near
                      </p>
                    </div>
                  </li>
                  <li>
                    <label className="check ">
                      <input
                        type="checkbox"
                        name="news"
                        className="form-control checkbox"
                        defaultValue={userData.news}
                        defaultChecked={userData.news}
                      ></input>
                      <span className="checkmark" />
                    </label>
                    <div className="text-box">
                      <h5>Continuum News</h5>
                      <p>
                        Send me updates about the company, product updates, and
                        activity I missed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};
export default Settings;

