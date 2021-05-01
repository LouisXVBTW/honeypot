import React from 'react';
import {Pie, Bar} from 'react-chartjs-2';
import "chartjs-plugin-labels";
import "../pages/main.css";
const data = {
  labels: ['DigitalOcean, LLC', 'Shenzhen Tencent Computer Systems Company LTD', 'CHINANET',
           'China Mobile Communications Corporation', 'EuroNet Internet', "Beijing Baidu Netcom Science and Technology Co., Ltd.", 
        "LGTELECOM", 'FranTech Solutions', 'Censys, Inc.', 'UCLOUD', 'Other'],
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
      data: [510, 374, 82, 73, 57, 49, 45, 38, 36, 32, 1740]
    }
  ]
}

const data2 = {
  labels: ['DigitalOcean, LLC', 'Shenzhen Tencent Computer Systems Company Limited', 'CHINANET',
  'China Mobile Communications Corporation', 'EuroNet Internet', "Beijing Baidu Netcom Science and Technology Co., Ltd.", 
"LGTELECOM", 'FranTech Solutions', 'Censys, Inc.', 'UCLOUD', 'Other'],


  datasets: [{
    label: "Top 10 most common ISPs",
    data: [510, 374, 82, 73, 57, 49, 45, 38, 36, 32, 1740],
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

export default class IPSpieALL extends React.Component {
  render() {
    return (
      <div >
        <Pie
          data={data}
          options={{
            title:{
              display:true,
              text:'Top 5 unique connections per Country',
              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom'
            },
            plugins: {
                labels: [{
                    render: "percentage",
                    fontSize: 16,
                    fontColor: "black"

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
        
       
      </div>
    );
  }
}

export class ISPbarALL extends React.Component{
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