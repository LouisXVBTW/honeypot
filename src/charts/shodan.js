import React from 'react';
import {Pie, Bar} from 'react-chartjs-2';
import "chartjs-plugin-labels";
import "../pages/main.css";
const data = {
  labels: ['Tor', 'starttls', 'database',
           'vpn', 'cloud', "Other"],
  datasets: [
    {
      label: 'idk',
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      hoverBackgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
      ],
      data: [135, 147, 282, 92, 581, 984]
    }
  ]
}

const data2 = {
  labels: ['Has CVE', "Doesn't have CVE"],
  datasets: [
    {
      label: 'idk',
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      hoverBackgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
      ],
      data: [875, 1346]
    }
  ]
}

const data3 = {
  labels: ['22', '80', '443',
           '123', '3306', "Other"],
  datasets: [
    {
      label: 'idk',
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      hoverBackgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
      ],
      data: [1487, 1029, 619, 265, 262, 3112]
    }
  ]
}
const data4 = {
  labels: ['CVE-2017-15906', 'CVE-2018-15919', 'CVE-2018-1312',
  'CVE-2019-0220', 'CVE-2018-17199', "Other"],
  datasets: [{
    label: "Shodan top 5 scanned vulnerable CVEs",
    data: [521, 446, 321, 320, 298, 9467],
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

export default class CVE extends React.Component {
  render() {
    return (
      <div >
        <Pie class="pie"
          data={data2}
          options={{
            title:{
              display:true,
              text:'Shodan scanned vulnerable CVE',
              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom',
              
            },
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                labels: [{
                    render: "percentage",
                    fontSize: 18,
                    fontColor: "black"

                },
                {
                    render: "label",
                    position: "outside",
                    fontSize: 20,
                    fontColor: "blue"
                }
            ]}
            
           
              
          }}
        />
        
       
      </div>
    );
  }
}

export class Tags extends React.Component {
  render() {
    return (
      <div >
        <Pie class="pie"
          data={data}
          options={{
            title:{
              display:true,
              text:'Shodan assigned tags',
              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom',
              
            },
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                labels: [{
                    render: "percentage",
                    fontSize: 18,
                    fontColor: "black"

                },
                {
                    render: "label",
                    position: "outside",
                    fontSize: 20,
                    fontColor: "blue"
                }
            ]}
            
           
              
          }}
        />
        
       
      </div>
    );
  }
}
export class Ports extends React.Component {
  render() {
    return (
      <div >
        <Pie class="pie"
          data={data3}
          options={{
            title:{
              display:true,
              text:'Shodan scanned open ports',
              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom',
              
            },
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                labels: [{
                    render: "percentage",
                    fontSize: 18,
                    fontColor: "black"

                },
                {
                    render: "label",
                    position: "outside",
                    fontSize: 20,
                    fontColor: "blue"
                }
            ]}
            
           
              
          }}
        />
        
       
      </div>
    );
  }
}

export class CommonCVE extends React.Component{
  render(){
      return(
          <div>
                  <Bar
      data = {data4}
      options = {{
          plugins:{
              labels:{
                  render: "value",
                  fontColor: "blue",
                  fontSize: 20,
              }
          }
      }}
      
      />
          </div>
          
      )
  }
}