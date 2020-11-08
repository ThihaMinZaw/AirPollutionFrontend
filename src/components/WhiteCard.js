import './styles/WhiteCard.scss'

import ReactSpeedometer from "react-d3-speedometer"



const WhiteCard = (props)=>{

  const cols = {
  
  "Humidity": "Humidity",
  "Lat":"Lattitude",
  "Lon": "Longitude",
  "PM10_0": "PM 10",
  "PM1_0": "PM 1",
  "PM2_5": "PM 25",
  "Pressure": "Pressure",
  "Temperature": "Temperature"
  }


    return (
        <div className="white-card container">
            
            
            <div className="row">
        <h3 className="white-card-header">{props.location}</h3>
        </div>

        <div className="row">
        <div className="container speedometer col-lg-6 col-sm-12 col-xs-12">
        <ReactSpeedometer
            
            width={250}
            height={200}
            maxValue={500}
            
            value={props.data.AQI}
            currentValueText={"AQI: "+ props.data.AQI}
            needleColor="white"
            startColor="green"
            segments={10}
            endColor="red"     
            />
            </div>
            <div className="data col-lg-6 col-sm-12 col-xs-12">
            
            <div className="row">

              {Object.keys(cols).map((key,index)=>(<div className="each-data">{cols[key]}<br />  {props.data[key]}</div>))}
              </div>
            </div>
        </div>
        

        
            
        </div>)

    

   

}

export default WhiteCard;