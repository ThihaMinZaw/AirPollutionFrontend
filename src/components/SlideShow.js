import axios from 'axios';
import React,{useContext,useEffect,useState} from 'react'

import Carousel from 'react-bootstrap/Carousel';

import './styles/SlideShow.scss'

import WhiteCard from './WhiteCard'

import GraphGallery from './InnerComponents/GraphGallery/GraphGallery'

import Map from './InnerComponents/map/map'





// import {airDataContext,airDataDispatchContext} from './AirDataProvider'




const SlideShow = ()=>{

  const [airData,setAirData] = useState([]);

  const [aqyHistory,setAqyHistory] = useState([]);

  useEffect(function(){
      axios(
        {
          method:"GET",
          url:"https://myanmarairpollution.herokuapp.com/api/v1/air",
        }
      ).then(result=>{console.log(result);setAirData(result.data)}).catch(err=>console.log(err));

      // axios({
      //   method:"GET",
      //   url:"https://myanmarairpollution.herokuapp.com/api/v1/aqi_monthly"
      // }).then(result=>{console.log(result);setAqyHistory(result.data)}).catch(err=>console.log(err))
  },[])


 

    return (<div>

      <div className="home-header container">

      {/* <div className="Map-Container">
        {console.log(airData[0])}
      <Map location={{lat:airData[0].Lat,lng:airData[0].Lon,address:airData[0].Label}} zoomLevel={14} />
    </div> */}
    <div className="row">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/EbENZ16qL-M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div className="general-stat">
      <h4>General Statistics</h4>
      <table>
        <tr>
        <th></th>
        <th></th>
        </tr>
        <tr>
          <td>Number of Sensors in Yangon: 12 </td>
        </tr>
        <tr><td>Number of Sensors in Mandalay: 2</td></tr>
      </table>
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