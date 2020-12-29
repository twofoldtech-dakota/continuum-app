import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";


export default function Graphs() {
    const router = useRouter();
    
    return (
       
<div>
<div className="title">
<h3>At a Glance</h3>
<div className="continuum-select">
<p>LICENSURE PERIOD </p>
<select className="form-control">
<option>2017-2020</option>
</select>
</div>
</div>
<div className="earning-progress">
</div>
<div className="credit-earning-sec">
<div className="row">
<div className="col-md-4 col-sm-6">
<div className="credit-earning-box">
  <h3>Credits Earned</h3>
  <div className="image-holder">
    <img src="images/graph-img1.png" className="img-fluid" alt="" />
  </div>
</div>
</div>
<div className="col-md-4 col-sm-6">
<div className="credit-earning-box blue-bg">
  <h3>Activity by Month</h3>
  <p>Rolling 12-Month History</p>
  <div className="image-holder">
    <img src="images/graph-img2.png" className="img-fluid" alt="" />
  </div>
</div>
</div>
<div className="col-md-4 col-sm-6">
<div className="credit-earning-box dark-blue-bg">
  <h3>Time Remaining</h3>
  <p>Licensure expires on June 4, 2021</p>
  <ul>
    <li>
      <h4>16</h4>
      <span>WEEKS</span>
    </li>
    <li>
      <h4>3</h4>
      <span>DAYS</span>
    </li>
  </ul>
</div>
</div>
</div>
</div>

</div>

    );

}

