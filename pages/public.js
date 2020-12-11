import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiZillow } from "react-icons/si";

import { MdLocationOn } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
export default function Home() {
  const router = useRouter();

  return (
    <div className="public-page">
      <div className="row top">
        <div className="col-sm-12 col-md-12 top-bar">
          <div className="logo">logo</div>
          <div className="title">Continuum</div>
        </div>
        <div className="profile-info">
          <div className="left">
            <img
              className="profile-image"
              src="https://media-exp1.licdn.com/dms/image/C5603AQE1h32pUQ7UoQ/profile-displayphoto-shrink_200_200/0/1591127333018?e=1613001600&v=beta&t=-Pwl5i5ptqyxuy391LNHAWpCF4h38JJJAmckZKGdtjc"
            ></img>
            <div className="social-icons">
              <a href="#">
                <FaTwitter className="social"></FaTwitter>
              </a>
              <a href="#">
                {" "}
                <FaLinkedin className="social"></FaLinkedin>
              </a>
              <a href="#">
                {" "}
                <FaInstagram className="social"></FaInstagram>
              </a>
              <a href="#">
                <SiZillow className="social"></SiZillow>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="name">CJ Lexington</div>
            <div className="sub">Coldwell Banker Fort Collins</div>
            <div className="position">
              Associate broker/REALTOR<sup>&#174;</sup>
            </div>
            <div className="info">
              <MdLocationOn className="info-icon"></MdLocationOn>
              <div className="address1">
                1201 Timberline Dr. Suite 206 Fort Collins, CO 80528
              </div>
            </div>
            <div className="info">
              <MdPhoneIphone className="info-icon"></MdPhoneIphone>
              <div>970-383-7044</div>
            </div>
            <div className="info">
              <MdEmail className="info-icon"></MdEmail>
              <div>
                <a href="mailto:cj.lexington@coldwellbanker.com">
                  cj.lexington@coldwellbanker.com
                </a>
              </div>
            </div>
            <div className="bio">
              CJ has an extensive background representing both buyers and
              sellers. He has worked hundreds of transactions in one of the most
              difficult markets for buyers in the country! Gavin also worked as
              a listing director for 2 years, managed a listing department and
              negotiated on behalf of 150 sellers in an 18 month period.
            </div>
          </div>
        </div>
      </div>
      <div className="row bottom">
        <div className="col-md-10 listing">
          <div className="row credits">
            <div className="col-md-6">
              <div className="credits-box">
                <span className="number">19</span>{" "}
                <span className="text">TOTAL CREDITS EARNED</span>
              </div>
              <div className="credits-box">
                <span className="number">5</span>{" "}
                <span className="text">CREDITS REMAINING</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="licensure-text">LICENSURE PERIOD</div>
              <select className="licensure-option">
                <option>Dec 1, 2017 - Nov 30, 2020</option>
              </select>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td className="title">
                    Fundamental Skills for Real Estate Agents
                  </td>
                  <td className="date">January 24, 2020</td>
                  <td className="hours">
                    <span>4</span> hours
                  </td>
                  <td className="view">
                    <span>View</span>
                  </td>
                </tr>
                <tr>
                  <td className="title">
                    Fundamental Skills for Real Estate Agents
                  </td>
                  <td className="date">January 24, 2020</td>
                  <td className="hours">
                    <span>4</span> hours
                  </td>
                  <td className="view">
                    <span>View</span>
                  </td>
                </tr>
                <tr>
                  <td className="title">
                    Fundamental Skills for Real Estate Agents
                  </td>
                  <td className="date">January 24, 2020</td>
                  <td className="hours">
                    <span>4</span> hours
                  </td>
                  <td className="view">
                    <span>View</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        
          <div className="col-sm-12 bottom-text">

          <div className="main">
            Continuum — the only continuing education credit tracking app designed specifically for real estate pros.
          </div>
          <div className="bottom">
            Continuum, Inc <span className="bullet">&#8226;</span><a href="/contact">Contact Us</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
