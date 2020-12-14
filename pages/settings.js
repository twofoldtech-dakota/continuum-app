import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Layout from "../components/shared/layout";

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
    isRealtor: true
    };

  const [errorMessage, setErrorMessage] = useState("");

  const { handleSubmit, register, watch, errors } = useForm();

  const onSubmit = handleSubmit(async (formData) => {
    if (errorMessage) setErrorMessage("");

    try {
        console.log(formData);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  });

  return (
    <Layout>
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
              <form className="licensur-info">
                <div className="row">
                  <div className="col-md-3">
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

                        <span>
                          <img src="images/calendar-icon.svg" alt="" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
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
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am a Realtor<sup>&#174;</sup>
                      </p>
                    </div>

                      </div>
                    </div>
                  </div>

              </form>
            </div>
            <div className="setting-box">
              <h4>Licensure Periods</h4>
              <form className="licensur-info">
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>STARTS</label><label>ENDS</label>
                      <div className="calendar">
                    
                  

                        <span>
                          <img src="images/calendar-icon.svg" alt="" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>ENDS</label>
                      <div className="calendar">
                        <input
                          type="text"
                          name="licensureEndDate"
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

                        <span>
                          <img src="images/calendar-icon.svg" alt="" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="setting-box">
              <h4>Social Media Links</h4>
              <form className="social-info">
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
              </form>
            </div>
            <div className="setting-box">
              <h4>NETWORK</h4>
              <form className="social-info">
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
              </form>
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
