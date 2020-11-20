import './styles/WhiteCard.scss'

import ReactSpeedometer from "react-d3-speedometer"

import Map from './InnerComponents/map/map'

import LocationGraph from './InnerComponents/LocationGraph/location_graph'

import React from 'react';
import moment from 'moment'



const WhiteCard = (props)=>{

  const cols = {
  
  "Humidity": "Humidity",
  "PM10_0": "PM 10",
  "PM1_0": "PM 1",
  "PM2_5": "PM 25",
  "Pressure": "Pressure",
  "Temperature": "Temperature",
  "City":"City"
  }

  // const location = {
  //   address: '1600 Amphitheatre Parkway, Mountain View, california.',
  //   lat: 37.42216,
  //   lng: -122.08427,
  // }
  const current_datetime = new moment().format("DD-MM-YYYY");


    return (
      
        <div className="white-card container">
            
            
            <div className="row">
        <h3 className="white-card-header sub-heading">{props.location}</h3>
        <hr style={{color:"black"}}/>
        </div>

        

        <h5 className="sub-heading">Today's Data ({current_datetime})</h5>

        <div className="row">
          
        <div className="container speedometer col-lg-6 col-sm-12 col-xs-12">
        <ReactSpeedometer
            
            width={250}
            height={200}
            maxValue={500}
            
            value={props.data.AQI}
            currentValueText={"AQI: "+ props.data.AQI}
            needleColor="black"
            startColor="green"
            segments={10}
            endColor="red"     
            />
            </div>
            <div className="data col-lg-6 col-sm-12 col-xs-12">
            
            <div className="row">

              {Object.keys(cols).map((key,index)=>(<div className="each-data" key={index}>{cols[key]}<br />  {props.data[key]}</div>))}
              </div>
            </div>
            
       
        </div>
        

        
            
        </div>)

    

   

}

export default WhiteCard;