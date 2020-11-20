import axios from 'axios';
import React,{useContext,useEffect,useState} from 'react'

import Carousel from 'react-bootstrap/Carousel';

import './styles/SlideShow.scss'

import WhiteCard from './WhiteCard'

import GraphGallery from './InnerComponents/GraphGallery/GraphGallery'

import Map from './InnerComponents/map/map'

// import Dash from './InnerComponents/dashboard/Dash'







// import {airDataContext,airDataDispatchContext} from './AirDataProvider'




const SlideShow = ()=>{

  const [airData,setAirData] = useState([]);

  const [yangonWeatherData,setYangonWeatherData] = useState({});

  const [mandalayWeatherData,setMandalayWeatherData] = useState({});
  

  const [aqyHistory,setAqyHistory] = useState([]);

  useEffect(function(){
      axios(
        {
          method:"GET",
          url:"https://myanmarairpollution.herokuapp.com/api/v1/air",
        }
      ).then(result=>{console.log(result);setAirData(result.data)}).catch(err=>console.log(err));


      axios({
        method:"GET",
        url:"https://myanmarairpollution.herokuapp.com/api/v1/yangon_weather"
      }).then(result=>{console.log(result);setYangonWeatherData(result.data)}).catch(err=>console.log(err));
      axios({
        method:"GET",
        url:"https://myanmarairpollution.herokuapp.com/api/v1/mandalay_weather"
      }).then(result=>{console.log(result);setMandalayWeatherData(result.data)}).catch(err=>console.log(err))
  },[])


 

    return (<div>

      <div className="home-header">

      {/* <div className="Map-Container">
        
      <Map location={{lat:airData[1].Lat,lng:airData[1].Lon,address:airData[1].Label}} zoomLevel={14} />
    </div> */}

    <div className="row">
    
    <iframe style={{borderRadius:"10px"}} width="660" height="415" src="https://www.youtube.com/embed/EbENZ16qL-M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
  
    <div className="col-md-6">
    <div className="general-stat">
      <h4>TODAY STATISTICS</h4>
      <table>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        {/* <tr height="100px">
          <td colSpan="6">Total Sensors in Yangon: 12</td>
          <td colSpan="6">Total Sensors in Mandalay: 2</td>
        </tr> */}
        {/* <tr height="100px">
          <td colSpan="6">Positive Covid Cases in Myanmar: 12</td>
          
        </tr> */}
        {/* <tr height="100px">
          <td>Average AQI: 130</td>
        </tr> */}
      </table>
      <div className="container weather">
        <div className="row">
        <div className="col-md-3">
          <h5>Yangon Weather</h5>
      <img src={yangonWeatherData.Icon} style={{width:"100px",height:"100px"}}></img>
      
      </div>
  <div className="col-md-2 element"><h5 className="title">Description</h5><h6>{yangonWeatherData.Description} </h6></div>
  <div className="col-md-2 element"><h5 className="title">Weather</h5><h6>{yangonWeatherData.Weather}</h6></div>
  <div className="col-md-2 element"><h5 className="title">AQI</h5><h6>{yangonWeatherData.AQI} </h6></div>
  {/* <div className="col-md-3 element"><h5 className="title">Covid Cases</h5><h6>{mandalayWeatherData.NEW}</h6></div> */}
      
      </div>
      <div className="row">
        <div className="col-md-3">
          <h5>Mandalay Weather</h5>
      <img src={mandalayWeatherData.Icon} style={{width:"100px",height:"100px"}}></img>
      
      </div>
  <div className="col-md-2 element"><h5 className="title">Description</h5><h6>{mandalayWeatherData.Description} </h6></div>
  <div className="col-md-2 element"><h5 className="title">Weather</h5><h6>{mandalayWeatherData.Weather}</h6></div>
  <div className="col-md-2 element"><h5 className="title">AQI</h5><h6>{mandalayWeatherData.AQI} </h6></div>
  {/* <div className="col-md-3 element"><h5 className="title">Covid Cases</h5><h6>{mandalayWeatherData.NEW}</h6></div> */}
      
      </div></div>
      
    
     
     </div>
    </div>
    </div>
    </div>


    <div className="carousel">
      
        <GraphGallery aqyHistory={aqyHistory} />
       
      <Carousel>
       

        {airData.map(place=>( <Carousel.Item interval={5000}>
          <WhiteCard location={place.Label}  data={place} key={place.ID} />
        
          
         
         
        <Carousel.Caption>
      
        
     
    </Carousel.Caption>
         
        </Carousel.Item>))}

      
      </Carousel>
      
      </div></div>)
    
}

export default SlideShow;