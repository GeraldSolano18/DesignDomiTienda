import React, { Component } from "react";
import Chart from "react-apexcharts";

class Chart1 extends Component {
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
             'Lunes',
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            'sabado',
            'domingo'
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
                        text:'Ventas de la ultima semana',
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
          data: [3333, 3557, 4677, 5774, 7467, 4643, 4646]
        }
      ]
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        height="400"
      />
    );
  }
}

export default Chart1;
