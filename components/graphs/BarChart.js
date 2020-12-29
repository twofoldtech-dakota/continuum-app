import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import {Bar} from 'react-chartjs-2';
export default function BarChart({data}) {
    const router = useRouter();
    var state = {
        labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        datasets: [
          {
            label: 'Activity by month',
            backgroundColor: 'white',
            borderColor: 'green',
            borderWidth: 0,
            data: data
          }
        ]
      }



    return (
        
<div className="credit-earning-box blue-bg">
              <h3>Activity by Month</h3>
              <p>Rolling 12-Month History</p>
              <div className="image-holder">
              <div>
          <Bar
            data={state}
            
            options={{
              title:{
                display:false,
                text:'',
                fontSize:20
              },
              legend:{
                display:false,
                position:'right'
              },
              scales: {
                yAxes: [{
                  gridLines: {
                    drawOnChartArea: false,
                    display:false,
                    
                  },
                  ticks: {
                    display:false
                },
                },],
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false,
                        
                    },
                    ticks: {
                        fontColor: '#232552'
                    },
                  }],
              }
            }}
          />
        </div>
      
              </div>
            </div>
    );

}
{/*  */}
