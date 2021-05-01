import React from 'react';
import {Pie, Bar} from 'react-chartjs-2';
import "chartjs-plugin-labels";
import "../pages/main.css";
const data = {
  labels: ['Shenzhen', 'Beijing', 'Amsterdam',
           'Wuhai Shi', 'Singapore', "Other"],
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
      data: [282, 191, 134, 124, 97, 2215]
    }
  ]
}

const data2 = {
  labels: ['Shenzhen', 'Beijing', 'Amsterdam',
  'Wuhai Shi', 'Singapore', "Other"],
  fontColor:"red",
  
  
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

export default class CityPieAll extends React.Component {
  render() {
    return (
      <div >
        <Pie class="pie"
          data={data}
          options={{
            title:{
              display:true,
              text:'Top 5 unique connections by City',
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

export class CityBarAll extends React.Component{
    render(){
        return(
            <div>
                    <Bar
        data = {data2}
        options = {{
          legend: {
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 50
                }
            }
        },
            plugins:{
                labels:{
                    render: "value",
                    fontColor: "blue",
                    fontSize: 20,
                },
                
            }
        }}
        
        />
            </div>
            
        )
    }
}