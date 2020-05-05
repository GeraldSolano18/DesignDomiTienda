import React, { Component } from "react";
import Chart from "react-apexcharts";

class Chart2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
          chart:{
          background: "f4f4f4",
          foreColor: "#333"
          },
          xaxis:{
            categories:[
             'Enero',
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            'Junio',
            'Julio'
            ]
          },
          plotOptions: {
                      bar: {
                        horizontal: true
                      }
                    },
                    fill: {
                      colors: ["#9A10AD"]
                    },
                
                    dataLabels: {
                      enabled: false
                    },
                    title:{
                        text:'Nivel de ventas anual',
                        align:'center',
                        margin:20,
                        offsetY:20,
                        style:{
                            fontSize:'25px'
                        }
            
                  }
      },
      grid: {
        row: {
          colors: ['#2E92A6']
        },
        column: {
          colors: ['#2E92A6']
        }
      },
      series: [
        {
          name: "Ventas",
          data: [53333, 35567, 46577, 57574, 64367, 74643, 46436]
        }
      ]
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="line"
        height="400"
      />
    );
  }
}

export default Chart2;
