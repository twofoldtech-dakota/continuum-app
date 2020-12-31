import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import BarChart from "../graphs/BarChart";
import PieChart from "../graphs/PieChart";
import ProgressBar from "../graphs/ProgressBar";
import TimeRemaining from "../graphs/TimeRemaining";
export default function Graphs() {
    const router = useRouter();
    const [selectedLicensurePeriod, setLicensurePeriod] = useState();
    const [activeLicensureCredits, setActiveLicensureCredits] = useState([]);
    const [currentLicensureCreditsEarned,setCurrentLicensureCreditsEarned,] = useState();
    const [currentLicensureCreditsRequired,setCurrentLicensureCreditsRequired,] = useState();
    const [licensurePeriodObject,setlicensurePeriodObject,] = useState();
    const [years, setYears] = useState();
    const [months, setMonths] = useState();
    const [days, setDays] = useState();
    const [endDateForTimeRemaining, setEndDateForTimeRemaining] = useState();
    const [isLicensurePeriodExpired, setIsLicensurePeriodExpired] = useState(false);
    const userData = {
        username: "dillonosmith",
        email: "dillon@twofold.tech",
        governingAgency: "The Governing Agency Test",
        savedCourses: [
        {
            name: "Saved Course 1",
            provider: {
            name: "American Home Shield",
            url: "http://www.google.com",
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
                url: "http://www.google.com",
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
                url: "http://www.google.com",
                },
                date: "01/20/2022",
                hours: 6,
                governingAgency: "Governing Agency Test",
                description: "Credit description testing testing testing",
                credits: 6,
            },
            {
                name: "Testing Period 2",
                /*user: User! @relation*/
                provider: {
                name: "All Service Real Estate Academy",
                url: "http://www.google.com",
                },
                date: "12/20/2022",
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
                url: "http://www.google.com",
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
                url: "http://www.google.com",
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
    useEffect(() => {
        if (userData.licensurePeriods[0] !== null) {
        setActiveCredits(userData.licensurePeriods[0].startDate + "-" + userData.licensurePeriods[0].endDate);
        setCurrentLicensureCreditsRequired(userData.licensurePeriods[0].creditsRequired);
        setCurrentLicensureCreditsEarned( userData.licensurePeriods[0].creditsEarned);
        setlicensurePeriodObject(userData.licensurePeriods[0]);
        }
    }, []);
    var barChartData = [];
    var yearlyHours = [0,0,0,0,0,0,0,0,0,0,0,0];
    var creditsEarnedGraphData = [0,0,0];
    var requiredCredits = currentLicensureCreditsRequired;
    var earnedCredits = currentLicensureCreditsEarned;
    var percent="";
    var endDate = new Date();
    
    
    function dateDiff(startingDate, endingDate) {
        if (!startingDate) {
            startingDate = new Date().toISOString().substr(0, 10);    // need date in YYYY-MM-DD format
        }
        if (!endingDate) {
            endingDate = new Date().toISOString().substr(0, 10);    // need date in YYYY-MM-DD format
        }
        setIsLicensurePeriodExpired(false);
        if(new Date(endingDate) < new Date()){
          setIsLicensurePeriodExpired(true);
          setYears(0);
          setMonths(0);
          setDays(0);
          return null; 
        }

        var endDate = new Date(endingDate);
        if (startDate > endDate) {
            var swap = startDate;
            startDate = endDate;
            endDate = swap;
        }
        var startDate = new Date(startingDate);
        var startYear = startDate.getFullYear();
        var february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
        var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
        var yearDiff = endDate.getFullYear() - startYear;
        var monthDiff = endDate.getMonth() - startDate.getMonth();
        if (monthDiff < 0) {
            yearDiff--;
            monthDiff += 12;
        }
        var dayDiff = endDate.getDate() - startDate.getDate();
        if (dayDiff < 0) {
            if (monthDiff > 0) {
                monthDiff--;
            } else {
                yearDiff--;
                monthDiff = 11;
            }
            dayDiff += daysInMonth[startDate.getMonth()];
        }
        setYears(yearDiff);
        setMonths(monthDiff);
        setDays(dayDiff);
        return yearDiff + 'Y ' + monthDiff + 'M ' + dayDiff + 'D';
    }

    for (let index = 0; index < activeLicensureCredits.length; index++) {
        const activeCredit = activeLicensureCredits[index];
        var month = activeCredit.date.split("/", 1);
        var newData = {};
        switch (month.toString()) {
                case "01":
                    yearlyHours[0] = yearlyHours[0] + activeCredit.hours;
                    break;
                case "02":
                    yearlyHours[1] = yearlyHours[1] + activeCredit.hours;

                    break;
                case "03":
                    yearlyHours[2] = yearlyHours[2] + activeCredit.hours;
                    break;
                case "04":
                    yearlyHours[3] = yearlyHours[3] + activeCredit.hours;
                    break;
                case "05":
                    yearlyHours[4] = yearlyHours[4] + activeCredit.hours;
                    break;
                case "06":
                    yearlyHours[5] = yearlyHours[5] + activeCredit.hours;
                    break;
                case "07":
                    yearlyHours[6] = yearlyHours[6] + activeCredit.hours;
                    break;
                case "08":
                    yearlyHours[7] = yearlyHours[7] + activeCredit.hours;
                    break;
                case "09":
                    yearlyHours[8] = yearlyHours[8] + activeCredit.hours;
                    break;
                case "10":
                    yearlyHours[9] = yearlyHours[9] + activeCredit.hours;
                    break;
                case "11":
                    yearlyHours[10] = yearlyHours[10] + activeCredit.hours;
                    break;
                case "12":
                    yearlyHours[11] = yearlyHours[11] + activeCredit.hours;
                    break;
            
                default:
                    break;
            }

        newData.hours = activeCredit.hours;
        barChartData.push(newData);
    }

    creditsEarnedGraphData = [userData.licensurePeriods[0].creditsRequired, currentLicensureCreditsEarned, 4];

    if(isNaN(requiredCredits) || isNaN(earnedCredits)){
        percent=" ";
       }else{
        percent = ((earnedCredits/requiredCredits) * 100).toFixed(3);
       }

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
        setCurrentLicensureCreditsRequired(period.creditsRequired);
        setCurrentLicensureCreditsEarned(period.creditsEarned);
        setlicensurePeriodObject(period);

        if(period != null)
        {
            setEndDateForTimeRemaining(new Date(period.endDate));
            dateDiff(new Date(period.startDate), new Date(period.endDate));
        }
        
      }
    });
    //loadCredits(credits, startLicensureDate, endLicensureDate);
  }

  function handleChange(event) {
    setActiveCredits(event);
    setLicensurePeriod(event);
  }
  return (
    <div>
      <div className="title">
        <h3>At a Glance</h3>
        <div className="continuum-select-home">
          <p>LICENSURE PERIOD </p>
          <select
                className="form-control"
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
      <div className="earning-progress">
      
      <ProgressBar creditsRequired={currentLicensureCreditsRequired} creditsEarned={currentLicensureCreditsEarned}/>
   

      </div>
      <div className="credit-earning-sec">
        <div className="row">
          <div className="col-md-5 col-sm-6 col-lg-4">
            <div className="credit-earning-box">
              <h3>Credits Earned</h3>
              <div className="image-holder">
                <PieChart data={creditsEarnedGraphData}/>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-6 col-lg-4">
            <BarChart data={yearlyHours} />
          </div>
          <div className="col-md-5 col-sm-6 col-lg-4">
            <TimeRemaining years={years} months={months} days={days} endDate={endDateForTimeRemaining} isExpired={isLicensurePeriodExpired}/>
          </div>
        </div>
      </div>
    </div>
  );
}
