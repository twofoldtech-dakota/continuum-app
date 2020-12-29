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
              '#505864',
              '#647BF0',
              '#43BFDD',
              
            ],
            hoverBackgroundColor: [
            '#505864',
            '#647BF0',
            '#43BFDD',
            
            ],
            data: data
          }
        ]
      }


      return (
        <div>
        <Doughnut
          data={state}
          options={{
            
            legend:{
              display:true,
              position:'right',
              labels: {
                fontColor: 'rgb(255,255,255)'
            }
              
            }
          }}
        />
        </div>
      );
    }

