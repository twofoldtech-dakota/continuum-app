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
import {MdEmail} from "react-icons/md";
export default function Home() {
  const router = useRouter();

  return (
    <div className="public-page">
      <div class="row top">
        <div className="col-sm-12 col-md-12">
          <div className="logo">logo</div>
          <div className="title">Continuum</div>
        </div>
        <div className="col-md-3 col-lg-2"></div>
        <div className="col-md-3 col-lg-3">
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
        <div className="col-md-6 col-lg-7">
          <div className="name">CJ Lexington</div>
          <div className="sub">Coldwell Banker Fort Collins</div>
          <div className="position">
            Associate broker/REALTOR<sup>&#174;</sup>
          </div>
          <div className="info">
            <MdLocationOn className="info-icon"></MdLocationOn>
            <div className="address1">1201 Timberline Dr. Suite 206 Fort Collins, CO 80528</div>
          </div>
          <div className="info">
            <MdPhoneIphone className="info-icon"></MdPhoneIphone>
            <div>970-383-7044</div>
          </div>
          <div className="info">
            <MdEmail className="info-icon"></MdEmail>
            <div><a href="mailto:cj.lexington@coldwellbanker.com">cj.lexington@coldwellbanker.com</a></div>
          </div>
          <div className="bio">CJ has an extensive background representing both buyers and sellers. 
          He has worked hundreds of transactions in one of the most difficult markets for buyers in the country! 
          Gavin also worked as a listing director for 2 years, managed a listing department and negotiated on behalf of 
          150 sellers in an 18 month period.</div>
        </div>
      </div>
      <div className="row bottom">
<div className="col-md-1"></div>
    <div className="col-md-10 listing">
      <div className="row credits">
        <div className="col-md-6">
      <div className="credits-box"><span className="number">19</span> <span className="text">TOTAL CREDITS EARNED</span></div>
      <div className="credits-box"><span className="number">5</span> <span className="text">CREDITS REMAINING</span></div>
      </div>
      <div className="col-md-6">
        <div className="licensure-text">LICENSURE PERIOD</div>
        <select className="licensure-option">
          <option>Dec 1, 2017 - Nov 30, 2020</option>
        </select>
      </div>
      </div>

    <ul class="list-group list-group-flush">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>

    </div>
    <div className="col-md-1"></div>


      </div>
    </div>
  );
}
