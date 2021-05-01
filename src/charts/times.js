import React from 'react';
import {Bar, Line} from 'react-chartjs-2';
import "chartjs-plugin-labels";
import "../pages/main.css";
const data = {
  labels: ['00', '01', '02',
           '03', '04', "05",'06', '07', '08',
           '09', '10', "11",'12', '13', '14',
           '15', '16', "17", '18', '19', '20',
           '21', '22', '23', '24'],
  datasets: [
    {
      label: 'New York',
      borderColor: "red",
      fill: true,
      stepped: true,
      data: [28902, 37726, 8550, 7089, 28191, 74466, 39916, 67851, 39139, 11230, 8983, 8451, 8682, 13071, 10949, 9220, 7530, 8008, 35141, 7523, 5037, 5035, 7431, 8743, 28902]
    },
    {
      label: 'London',
      borderColor: "blue",
      fill: true,
      stepped: true,
      data: [11460, 14327, 14460, 15833, 13014, 12109, 13361, 8229, 7355, 7539, 9731, 10524, 10051, 7365, 10817, 16157, 16690, 22822, 16247, 12655, 14942, 17869, 21428, 19732,11460]
    },
    {
      label: 'Singapore',
      borderColor: "green",
      fill: true,
      stepped: true,
      data: [9356, 8946, 9881, 38304, 10627, 8317, 7566, 8334, 7361, 7018, 7849, 11668, 8309, 7321, 11397, 10629, 11052, 10294, 10266, 7995, 7502, 10170, 9375, 9452, 9356]
    },
    {
      label: 'All Average',
      borderColor: "yellow",
      fill: true,
      stepped: true,
      data: [20816, 60999, 32891, 61226, 51832, 94892, 60843, 84414, 53855, 25787, 26563, 30643, 27042, 27757, 33163, 36006, 35272, 41124, 61654, 28173, 27481, 33074, 38234, 37927,20816]
    }
  ]
}

const data2 = {
  labels: ['Shenzhen', 'Beijing', 'Amsterdam',
  'Wuhai Shi', 'Singapore', "Other"],
  datasets: [{
    label: "Top 5 unique connections by City",
    data: [282, 191, 134, 124, 97, 2215],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

export default class TimeLine extends React.Component {
  render() {
    return (
      <div >
        <Line
          data={data}
          options={{
            title:{
              display:true,
              text:'GMT+1 # of interactions per hour',
              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom'
            },
           
            
           
              
          }}
        />
        
       
      </div>
    );
  }
}
