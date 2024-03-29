import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiZillow } from "react-icons/si";

import { MdLocationOn } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import PublicProfileLogoTop from "../components/svgs/publicprofilelogotop";
import PublicProfileLogoBottom from "../components/svgs/publicprofilelogobottom";
import CrossIcon from "../components/svgs/crossIcon";
import ExpendIcon from "../components/svgs/expendIcon";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const router = useRouter()

  //const { data: userData, mutate, errors } = useSWR("/api/getUserByUsername?username=test usernaame", fetcher);
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
  //use this to pass username in url and pull thhat user


  // const { data, error } = useSWR(`/api/getUserByUsername/${username}`, fetcher);
  const [selectedLicensurePeriod, setLicensurePeriod] = useState();
  const [activeLicensureCredits, setActiveLicensureCredits] = useState([]);
  const [
    currentLicensureCreditsEarned,
    setCurrentLicensureCreditsEarned,
  ] = useState();
  const [
    currentLicensureCreditsRemaining,
    setCurrentLicensureCreditsRemaining,
  ] = useState();
  const [showModal, setShowModal] = useState();
const [creditToView, setCreditToView] = useState(null);
  /*only loads on initial load */
  useEffect(() => {
    if (userData.licensurePeriods[0] !== null) {
      setActiveCredits(userData.licensurePeriods[0].startDate + "-" + userData.licensurePeriods[0].endDate);
      
      setShowModal(false);
    }
  }, []);
  const mailTo = "mailto:";
  var email = "";
  if (userData.email && userData.email !== "" && userData.email !== null) {
    email = mailTo + userData.email;
  }

  /*set setActiveCredits to only list credits that are within the current selected licensure period.*/
  function setActiveCredits(licensurePeriod) {
    var startLicensureDate = "";
    var endLicensureDate = "";
    if (licensurePeriod !== undefined && licensurePeriod.indexOf("-") > -1) {
      var split = licensurePeriod.split("-");
      startLicensureDate = split[0];
      endLicensureDate = split[1];
    }

    userData.licensurePeriods.forEach((period) => {
      if (
        period.startDate == startLicensureDate &&
        period.endDate == endLicensureDate
      ) {
        setActiveLicensureCredits(period.credits);
        setCurrentLicensureCreditsRemaining(period.creditsRequired - period.creditsEarned);
        setCurrentLicensureCreditsEarned(period.creditsEarned);

        
      }
    });
    //loadCredits(credits, startLicensureDate, endLicensureDate);
  }

  function handleChange(event) {
    setActiveCredits(event);
  }

  function showSlideOut(credit) {
    setShowModal(true);
    setCreditToView(credit);
  }

  function hideModal(){
    setShowModal(false);
  }
  
  return (
<div>
    <div className="public-page">
      <div className="row top">
        <div className="col-sm-12 col-md-12 top-bar">
          <div className="logo">
            <PublicProfileLogoTop />
          </div>
        </div>
        <div className="profile-info">
          <div className="left">
            <img className="profile-image" src={userData.profileImage}></img>
            <div className="social-icons">
              <a href={userData.twitter}>
                <FaTwitter className="social"></FaTwitter>
              </a>
              <a href={userData.linkedin}>
                {" "}
                <FaLinkedin className="social"></FaLinkedin>
              </a>
              <a href={userData.instagram}>
                {" "}
                <FaInstagram className="social"></FaInstagram>
              </a>
              <a href={userData.zillow}>
                <SiZillow className="social"></SiZillow>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="name">{userData.name}</div>
            <div className="sub">{userData.company}</div>
            <div className="position">
              {userData.title}
              {userData.isRealtor ? (
                <span>
                  / REALTOR<sup>&#174;</sup>
                </span>
              ) : (
                <span></span>
              )}

              <span className="bullet">&#8226;</span>
              {userData.licenseNumber}
            </div>
            <div className="info">
              <MdLocationOn className="info-icon"></MdLocationOn>
              <div className="address1">
                {userData.addressLine1}&nbsp;{userData.addressLine2},&nbsp;
                {userData.state}&nbsp;{userData.zip}
              </div>
            </div>
            <div className="info">
              <MdPhoneIphone className="info-icon"></MdPhoneIphone>
              <div>
                Office: {userData.officePhone}
                <span className="bullet">&#8226;</span>Personal:{" "}
                {userData.phone}
              </div>
            </div>
            <div className="info">
              <MdEmail className="info-icon"></MdEmail>
              <div>
                <a href={email}>{userData.email}</a>
              </div>
            </div>
            <div className="bio">{userData.bio}</div>
          </div>
        </div>
      </div>
      <div className="row bottom">
        <div className="col-md-10 listing">
          <div className="row credits">
            <div className="col-md-6">
              <div className="credits-box">
                <span className="number">{currentLicensureCreditsEarned}</span>{" "}
                <span className="text">TOTAL CREDITS EARNED</span>
              </div>
              <div className="credits-box">
                <span className="number">
                  {currentLicensureCreditsRemaining}
                </span>
                <span className="text">CREDITS REMAINING</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="licensure-text">LICENSURE PERIOD</div>
              <select
                className="licensure-option"
                defaultValue={userData.licensurePeriods[0]}
                value={selectedLicensurePeriod}
                /*onChange={e => setLicensurePeriod(e.currentTarget.value)}*/
                onChange={(e) => handleChange(e.currentTarget.value)}
              >
                {userData.licensurePeriods.map((period) => (
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

          <div className="table-responsive">
            <table className="table">
              <tbody>
                {activeLicensureCredits.map((credit) => (
                  <tr key={credit.name}>
                    <td className="title">{credit.name}</td>
                    <td className="date">{credit.date}</td>
                    <td className="hours">
                      <span>{credit.credits}</span> hours
                    </td>
                    <td className="view">
                      <span onClick={() => showSlideOut(credit)}>
                        View Certificate
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-sm-12 bottom-text">
            <PublicProfileLogoBottom />
            <div className="main">
              Continuum — the only continuing education credit tracking app
              designed specifically for real estate pros.
            </div>
            <div className="bottom">
              Continuum, Inc <span className="bullet">&#8226;</span>
              <a href="/contact">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

  
    </div>

<div className={showModal ? "overly active" : "overly"} onClick={hideModal}></div>
<div className={showModal ? "credits-earned-modal active" : "credits-earned-modal"}>
  <div className="cross-icon">
    <a href="#" onClick={hideModal}>
      <CrossIcon/>
    </a>
  </div>
  <div className="text-box">
    <h3>{creditToView !== null ? creditToView.hours : ""} Credits Earned</h3>
    <p>{creditToView !== null ? creditToView.name : ""}</p>
    <a href={creditToView !== null ? creditToView.provider.url : ""}>
      {creditToView !== null ? creditToView.provider.name : " "}{" "}&nbsp;
      <ExpendIcon />
    </a>
  </div>
  <div className="calendar-text creadit-date">
    <p>COMPLETED DATE: {creditToView !== null ? creditToView.date : ""}</p>
    
  </div>
  <div className="upload">
    <h4>CERTIFICATE</h4>
    <div className="upload-inner">
      
      <div className="image-holder">
        <img
          src={creditToView !== null ? creditToView.certificateImage : ""}
          alt=""
          className="img-fluid"
        />
      </div>
    </div>
  </div>
  
</div>
</div>
  );
}
