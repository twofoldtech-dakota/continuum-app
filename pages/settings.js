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
        licensurePeriod: [
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
              }
              
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
    
          }
        ],
        alerts: true,
        news: true,
        hideContactInfo: true,
        profileImage:
          "https://media-exp1.licdn.com/dms/image/C5603AQE1h32pUQ7UoQ/profile-displayphoto-shrink_200_200/0/1591127333018?e=1613001600&v=beta&t=-Pwl5i5ptqyxuy391LNHAWpCF4h38JJJAmckZKGdtjc",
      };

    const [errorMessage, setErrorMessage] = useState("");

    const { handleSubmit, register, watch, errors } = useForm();

    const onSubmit = handleSubmit(async (formData) => {
        if (errorMessage) setErrorMessage("");

        try {
            
        } catch (error) {
            console.error(error);
            setErrorMessage(error.message);
        }
    });

    return (
        <Layout >
        <div className="continuum-detail">
            <div className="title">
                <h3>Settings &amp; Preferences</h3>
                <a className="btn-default" href="#">
                    Save Changes
                </a>
            </div>
            <div className="setting-sec">
                <div className="setting-box">
                    <h4>Licensure Information</h4>
                    <form className="licensur-info">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>LICENSE TYPE</label>
                                    <select className="form-control">
                                        <option>Real Estate</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="form-group">
                                    <label>GOVERNING AGENCY</label>
                                    <select className="form-control">
                                        <option>
                                            Colorado Association of Realtors
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>CURRENT LICENSE EXPIRATION</label>
                                    <div className="calendar">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="startDate"
                                            placeholder="06/30/2020"
                                        />
                                        <span>
                                            <img
                                                src="images/calendar-icon.svg"
                                                alt=""
                                            />
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
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>LINKEDIN</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="http://linkedin.com/in/kate-jennings70"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>FACEBOOK</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="http://"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>TWITTER</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="http://"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="setting-box">
                    <h4>Login Credentials</h4>
                    <form className="social-info">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>USERNAME</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="kate.jennings70@gmail.com"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
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
                            </div>
                        </div>
                    </form>
                </div>
                <div className="setting-box">
                    <h4>Email Notifications</h4>
                    <div className="email-notification">
                        <ul>
                            <li>
                                <label className="check ">
                                    <input type="checkbox" name="is_name" />
                                    <span className="checkmark" />
                                </label>
                                <div className="text-box">
                                    <h5>Expiration Alerts</h5>
                                    <p>
                                        Send me reminders about how many credits
                                        I need as my expiration date gets near
                                    </p>
                                </div>
                            </li>
                            <li>
                                <label className="check ">
                                    <input type="checkbox" name="is_name" />
                                    <span className="checkmark" />
                                </label>
                                <div className="text-box">
                                    <h5>Continuum News</h5>
                                    <p>
                                        Send me updates about the company,
                                        product updates, and activity I missed
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    );
};
export default Settings;

