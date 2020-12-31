import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function TimeRemaining({years, months, days, endDate, isExpired}) {
    const router = useRouter();
    useEffect(() => {
        
    }, []);

    var options = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div className="credit-earning-box dark-blue-bg">
              <h3>Time Remaining</h3>
              <p>{endDate && isExpired === false ? "Licensure expires on " + endDate.toLocaleDateString("en-US", options) : endDate ? "Licensure period expired on " + endDate.toLocaleDateString("en-US", options) : "Expired"}</p>
              <ul>
              <li className={isExpired === false ? "hidden" : ""}>
                  <h4>{isExpired === false ? "" : "EXPIRED"}</h4>
                  
                </li>
                <li className={years === 0 ? "hidden" : ""}>
                  <h4>{years ? years : 0}</h4>
                  <span>YEARS</span>
                </li>
                <li className={months === 0 ? "hidden" : ""}>
                  <h4>{months ? months : 0}</h4>
                  <span>MONTHS</span>
                </li>
                <li className={days === 0 ? "hidden" : ""}>
                  <h4>{days ? days : 0}</h4>
                  <span>DAYS</span>
                </li>
              </ul>
            </div>

    );

}
