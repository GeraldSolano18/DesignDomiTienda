import React,{Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
import "../Styles/Dashboard.scss";

class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
               labels:['Pantalon Marca ZARA talla32','Camisa-TH ','Sueter Zara color negro','Zapatos-VANS','Billetera de los vengadores'],
               datasets:[
                   {
                       label:'XX',
                       data:[
                           62222,
                           82233,
                           44444,
                           67463,
                           32468
                       ],
                       backgroundColor:[
                        '#7E2EFF',
                        '#FF4C12',
                        '#4AFF36',
                        '#36CAEB',
                        '#E8C225'

                       ]
                   }
               ] 
            }
        }

    }
render(){
    return(
        <div className="chart">
        <Pie
          data={this.state.chartData}
          options={{
          title:{
            display:true,
            text:'Los productos  más vendido',
            fontSize:25,
            fontColor:'#000000'
          },
          legend:{
            display:true,
            position:'right'
          }
          }}
        />
        </div>
            )
}
    
}
export default Chart