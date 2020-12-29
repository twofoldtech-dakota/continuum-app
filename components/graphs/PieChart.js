import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import {Pie, Doughnut} from 'react-chartjs-2';


  
  export default function PieChart({data}) {
    const state = {
        labels: ['Required', 'Total Earned', 'CREC Earned'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00',
              
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            
            ],
            data: [24, 12, 6]
          }
        ]
      }


      return (
        <div>
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
      );
    }

