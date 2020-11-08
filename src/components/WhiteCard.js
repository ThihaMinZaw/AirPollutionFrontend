import './WhiteCard.css'

import ReactSpeedometer from "react-d3-speedometer"



const WhiteCard = (props)=>{

    
        



    return (
        <div className="white-card container">
            
            
            <div className="row">
        <h3 className="white-card-header">{props.location}</h3>
        </div>

        <div className="row">
        <div className="container speedometer col-lg-6 col-sm-12 col-xs-12">
        <ReactSpeedometer
            
            height={200}  
            maxValue={500}
            
            value={props.data.AQI}
            currentValueText={"AQI: "+ props.data.AQI}
            needleColor="white"
            startColor="green"
            segments={10}
            endColor="red" 
            customSegmentLabels={[
                {
                  text: "Very Bad",
                  position: "INSIDE",
                  color: "#555",
                  fontSize:"5px"
                },
                {
                  text: "Bad",
                  position: "INSIDE",
                  color: "#555",
                  fontSize:"5px"
                },
                {
                  text: "Ok",
                  position: "INSIDE",
                  color: "#555",
                  fontSize: "19px",
                  fontSize:"5px"
                },
                {
                  text: "Good",
                  position: "INSIDE",
                  color: "#555",
                  fontSize:"5px"
                },
                {
                  text: "Very Good",
                  position: "INSIDE",
                  color: "#555",
                  fontSize:"5px"
                },
                {
                    text: "Very Bad",
                    position: "INSIDE",
                    color: "#555",
                    fontSize:"5px"
                  },
                  {
                    text: "Bad",
                    position: "INSIDE",
                    color: "#555",
                    fontSize:"5px"
                  },
                  {
                    text: "Ok",
                    position: "INSIDE",
                    color: "#555",
                    fontSize:"5px"
                  },
                  {
                    text: "Good",
                    position: "INSIDE",
                    color: "#555",
                    fontSize:"5px"
                  },
                  {
                    text: "Very Good",
                    position: "INSIDE",
                    color: "#555",
                    fontSize:"5px"
                  },

              ]}
            
            
            
            
            />
            </div>
            <div className="data col-lg-6 col-sm-12 col-xs-12">
            
            <div className="row">

              {Object.keys(props.data).map((key,index)=>(<div className="col-lg-4 col-sm-2">{key}:  {props.data[key]}</div>))}
              </div>
            </div>
        </div>
        

        
            
        </div>)

    

   

}

export default WhiteCard;