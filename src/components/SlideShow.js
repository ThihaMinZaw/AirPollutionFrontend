import Carousel from 'react-bootstrap/Carousel';

import './SlideShow.css'

import WhiteCard from './WhiteCard'

const data =[ 
  
  {
  "location":"7 mile Mayangone",
  "AQI": 96,
  "Humidity": "67",
  "Lat": 16.856831,
  "Lon": 96.146523,
  "PM10_0": "40.58",
  "PM1_0": "22.92",
  "PM2_5": "33.54",
  "Pressure": "1011.2",
  "Temperature": "91"
  },
  {
      "location":"Yankin",
      "AQI": 96,
      "Humidity": "67",
      "Lat": 16.856831,
      "Lon": 96.146523,
      "PM10_0": "40.58",
      "PM1_0": "22.92",
      "PM2_5": "33.54",
      "Pressure": "1011.2",
      "Temperature": "91"
  },
  {
      "location":"8 Mile Yangon",
      "AQI": 36,
      "Humidity": "67",
      "Lat": 16.856831,
      "Lon": 96.146523,
      "PM10_0": "40.58",
      "PM1_0": "22.92",
      "PM2_5": "33.54",
      "Pressure": "1011.2",
      "Temperature": "91"
  },
  {
    "location":"Sacramento Old Town",
    "AQI": 50,
    "Humidity": "67",
    "Lat": 16.856831,
    "Lon": 96.146523,
    "PM10_0": "40.58",
    "PM1_0": "22.92",
    "PM2_5": "33.54",
    "Pressure": "1011.2",
    "Temperature": "91"
},
{
  "location":"Albany",
  "AQI": 50,
  "Humidity": "67",
  "Lat": 16.856831,
  "Lon": 96.146523,
  "PM10_0": "40.58",
  "PM1_0": "22.92",
  "PM2_5": "33.54",
  "Pressure": "1011.2",
  "Temperature": "91"
},
]


const SlideShow = ()=>{


    return (
    <div className="carousel">
      <Carousel>

        {data.map(place=>( <Carousel.Item interval={5000}>
          <WhiteCard location={place.location}  data={place} />

        <Carousel.Caption>
        
     
    </Carousel.Caption>
         
        </Carousel.Item>))}

      
      </Carousel>
      
      </div>)
    
}

export default SlideShow;