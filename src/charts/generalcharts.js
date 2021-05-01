import React from 'react';
import {Pie, Bar} from 'react-chartjs-2';
import "chartjs-plugin-labels";
import "../pages/main.css";
const data = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
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
      data: [500, 59, 80, 81, 56]
    }
  ]
}

const data2 = {
  labels: ["1", "2", "3",'4','5'],
  datasets: [{
    label: "this is a test",
    data: [65, 59, 80, 81, 56],
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

export default class Donut extends React.Component {
  render() {
    return (
      <div class="grid-col">
        <Pie
          data={data}
          options={{
            title:{
              display:true,
              text:'Average Rainfall poop per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
            plugins: {
                labels: [{
                    render: "percentage"
                },
                {
                    render: "label",
                    position: "outside",
                    fontSize: 16,
                    fontColor: "black"
                }
            ]}
            
           
              
          }}
        />
        <Bar
        data = {data2}
        options = {{
            plugins:{
                labels:{
                    render: "value"
                }
            }
        }}
        
        />
       
      </div>
    );
  }
}