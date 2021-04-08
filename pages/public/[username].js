import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiZillow } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import PublicProfileLogoTop from "../../components/svgs/publicprofilelogotop";
import PublicProfileLogoBottom from "../../components/svgs/publicprofilelogobottom";
import CrossIcon from "../../components/svgs/crossIcon";
import ExpendIcon from "../../components/svgs/expendIcon";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());

const Post = () => {
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
  const [userDataParsed, setUserDataParsed] = useState(null);

  const router = useRouter();
  const { username } = router.query;
  var email = "";
  
  const { data: userData, error } = useSWR(
    "/api/getUserByUsername?username=" + username,
    fetcher
  );
 
  useEffect(() => {
      if(userData){
        setUserDataParsed(userData[0].data);
        
        
        if (userData[0].data.licensurePeriods[0] !== null) {
            setActiveCredits(userData[0].data.licensurePeriods[0]?.startDate + "-" + userData[0].data.licensurePeriods[0]?.endDate);
            
            setShowModal(false);
          }
    
          const mailTo = "mailto:";
          if (userDataParsed?.email && userDataParsed?.email !== "" && userDataParsed?.email !== null) {
          email = mailTo + userDataParsed?.email;
          }
      }
    
  }, [userData]);


  /*set setActiveCredits to only list credits that are within the current selected licensure period.*/
  function setActiveCredits(licensurePeriod) {
      console.log(licensurePeriod)
    var startLicensureDate = "";
    var endLicensureDate = "";
    if (licensurePeriod !== undefined && licensurePeriod.indexOf("-") > -1) {
      var split = licensurePeriod.split("-");
      startLicensureDate = split[0];
      endLicensureDate = split[1];
    }

    userData[0].data.licensurePeriods.forEach((period) => {
      if (
        period.startDate == startLicensureDate &&
        period.endDate == endLicensureDate
      ) {
        setActiveLicensureCredits(period.credits);
        setCurrentLicensureCreditsRemaining(
          period.creditsRequired - period.creditsEarned
        );
        setCurrentLicensureCreditsEarned(period.creditsEarned);
      }
    });
    //dont need for now
    //loadCredits(credits, startLicensureDate, endLicensureDate);
  }

  function handleChange(event) {
    setActiveCredits(event);
  }

  function showSlideOut(credit) {
    setShowModal(true);
    setCreditToView(credit);
  }

  function hideModal() {
    setShowModal(false);
  }

  if (userDataParsed != null) {

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
                <img
                  className="profile-image"
                  src={userDataParsed?.profileImage}
                ></img>
                <div className="social-icons">
                  <a href={userDataParsed?.twitter}>
                    <FaTwitter className="social"></FaTwitter>
                  </a>
                  <a href={userDataParsed?.linkedin}>
                    {" "}
                    <FaLinkedin className="social"></FaLinkedin>
                  </a>
                  <a href={userDataParsed?.instagram}>
                    {" "}
                    <FaInstagram className="social"></FaInstagram>
                  </a>
                  <a href={userData?.zillow}>
                    <SiZillow className="social"></SiZillow>
                  </a>
                </div>
              </div>
              <div className="right">
                <div className="name">{userDataParsed?.name}</div>
                <div className="sub">{userDataParsed?.company}</div>
                <div className="position">
                  {userDataParsed?.title}
                  {userDataParsed?.isRealtor ? (
                    <span>
                      / REALTOR<sup>&#174;</sup>
                    </span>
                  ) : (
                    <span></span>
                  )}

                  <span className="bullet">&#8226;</span>
                  {userDataParsed?.licenseNumber}
                </div>
                <div className="info">
                  <MdLocationOn className="info-icon"></MdLocationOn>
                  <div className="address1">
                    {userDataParsed?.addressLine1}&nbsp;{userDataParsed?.addressLine2}
                    ,&nbsp;
                    {userDataParsed?.state}&nbsp;{userDataParsed?.zip}
                  </div>
                </div>
                <div className="info">
                  <MdPhoneIphone className="info-icon"></MdPhoneIphone>
                  <div>
                    Office: {userDataParsed?.officePhone}
                    <span className="bullet">&#8226;</span>Personal:{" "}
                    {userDataParsed?.phone}
                  </div>
                </div>
                <div className="info">
                  <MdEmail className="info-icon"></MdEmail>
                  <div>
                    <a href={email}>{userDataParsed?.email}</a>
                  </div>
                </div>
                <div className="bio">{userDataParsed?.bio}</div>
              </div>
            </div>
          </div>
          <div className="row bottom">
            <div className="col-md-10 listing">
              <div className="row credits">
                <div className="col-md-6">
                  <div className="credits-box">
                    <span className="number">
                      {currentLicensureCreditsEarned}
                    </span>{" "}
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
                    defaultValue={
                        userDataParsed?.licensurePeriods < 0
                        ? userDataParsed?.licensurePeriods[0]
                        : ""
                    }
                    value={selectedLicensurePeriod}
                    /*onChange={e => setLicensurePeriod(e.currentTarget.value)}*/
                    onChange={(e) => handleChange(e.currentTarget.value)}
                  >
                    {userDataParsed?.licensurePeriods?.map((period) => (
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

        <div
          className={showModal ? "overly active" : "overly"}
          onClick={() => hideModal()}
        ></div>
        <div
          className={
            showModal ? "credits-earned-modal active" : "credits-earned-modal"
          }
        >
          <div className="cross-icon">
            <a href="#" onClick={() => hideModal()}>
              <CrossIcon />
            </a>
          </div>
          <div className="text-box">
            <h3>
              {creditToView !== null ? creditToView.hours : ""} Credits Earned
            </h3>
            <p>{creditToView !== null ? creditToView.name : ""}</p>
            <a href={creditToView !== null ? creditToView.provider.url : ""}>
              {creditToView !== null ? creditToView.provider.name : " "} &nbsp;
              <ExpendIcon />
            </a>
          </div>
          <div className="calendar-text creadit-date">
            <p>
              COMPLETED DATE: {creditToView !== null ? creditToView.date : ""}
            </p>
          </div>
          <div className="upload">
            <h4>CERTIFICATE</h4>
            <div className="upload-inner">
              <div className="image-holder">
                <img
                  src={
                    creditToView !== null ? creditToView.certificateImage : ""
                  }
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
  else{
      return(<div>Loading profile page for {username}</div>);
  }
};

export default Post;
