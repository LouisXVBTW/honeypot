import React from 'react';
import {Pie, Bar} from 'react-chartjs-2';
import "chartjs-plugin-labels";
import "../pages/main.css";
const data = {
  labels: ['China', 'Germany', 'United States',
           'Hong Kong', 'Netherlands', "Other"],
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
      data: [232578, 199791, 131814, 122735, 103147, 276593]
    }
  ]
}

const data2 = {
  labels: ['China', 'Germany', 'United States',
  'Hong Kong', 'Netherlands', "Other"],
  datasets: [{
    label: "Top 5 traffic by Country",
    data: [232578, 199791, 131814, 122735, 103147, 276593],
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

export default class ConnectionsPieAll extends React.Component {
  render() {
    return (
      <div >
        <Pie
          data={data}
          options={{
            title:{
              display:true,
              text:'Top 5 traffic by Country',
              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom'
            },
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

export class ConnectionsBarAll extends React.Component{
    render(){
        return(
            <div>
                    <Bar
        data = {data2}
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