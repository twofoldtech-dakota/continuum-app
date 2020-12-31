import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Moment from "moment";
import useSWR from "swr";
import BlankStar from "../svgs/blankStar";
import FilledStar from "../svgs/filledStar";

export default function Credit({ credit, showModal, creditToView }) {
    const router = useRouter();
    const { data } = useSWR("/api/user");
   
    function showSlideOut(credit) {
        showModal = true;
        creditToView = credit;
      }
    
      function hideModal(){
        showModal = false;
      }

    return (

        <tr>
            <td width="60%">
                <div class="upcomingp-courses-select">
                    
                    <div class="text-box">
                        <h4>{credit.name}</h4> 
                    </div>
                </div>
            </td>
            <td>{Moment(credit.date).format("MMMM d, yyyy")}</td> 
            <td><a class="time-btn" href="#"><img src="images/tick-icon.svg" alt="" /> 12 HOURS</a></td>
            <td><a class="claim-btn" href="#" onClick={() => showSlideOut(credit)}>View</a></td>
        </tr>

        
    );
    
}
