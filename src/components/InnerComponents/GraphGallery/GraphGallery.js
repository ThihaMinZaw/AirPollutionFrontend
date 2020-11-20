import "./GraphGallery.scss";

import { useEffect, useState } from "react";

import CovidGraph from '../CovidGraph/CovidGraph'

import {
  Chart,
  Axis,
  Tooltip,
  Line,
  Point,
  LineAdvance,
  Legend,
  View,
  Geom,
} from "bizcharts";
import axios from "axios";

const GraphsGallery = (props) => {
  const data = [
    {
      month: "Jan",
      city: "Tokyo",
      temperature: 7,
    },
    {
      month: "Jan",
      city: "London",
      temperature: 3.9,
    },
  ];
  const [aqyHistory, setAqyHistory] = useState({});
  const [aqyByMonthMandalay, setAqyByMonthMandalay] = useState([]);
  const [aqyByMonthYangon, setAqyByMonthYangon] = useState([]);

  useEffect(function () {
    axios({
      method: "GET",
      url: "https://myanmarairpollution.herokuapp.com/api/v1/aqi_monthly",
    })
      .then((result) => {
        console.log(result.data);
        //reformatting data into aqy by month
        const [yangonData, mandalayData] = reformatByMonth(result.data);

        setAqyByMonthMandalay(mandalayData);
        setAqyByMonthYangon(yangonData);
      })
      .catch((err) => console.log(err));
  }, []);

  function reformatByMonth(data_json) {
    let temp_mandalay = [];
    let temp_yangon = [];

    for (let month in data_json["Mandalay"]) {
      for (let date in data_json["Mandalay"][month]) {
        let AQI = data_json["Mandalay"][month][date].AQI;
        let covid = data_json["Mandalay"][month][date].NEW;
        temp_mandalay.push({
          AQI: AQI,
          date: date,
          city: "Mandalay",
          covid: covid,
        });
      }
    }

    for (let month in data_json["Yangon"]) {
      for (let date in data_json["Yangon"][month]) {
        let AQI = data_json["Yangon"][month][date].AQI;
        let covid = data_json["Yangon"][month][date].NEW;
        temp_yangon.push({
          AQI: AQI,
          date: date,
          city: "Yangon",
          covid: covid,
        });
      }
    }

    return [temp_yangon, temp_mandalay];
  }

  return (
    <div className="GraphGallery">

      <div className="container">
        <div className="welcome-text">
          <h1>Welcome to our Myanmar AirPollution Analysis Website</h1>
          <p>
            Hello. Welcome to our air pollution analysis website specifically design for regions within Myanmar.Due to recent changes in politics,
            Myanmar can be thought of as a country developing at quite a fast pace. Many factories are being built, and cars and other machines are becoming quite affordable,
            air pollution is slowly becoming one of the challenges that Myanmar has to face. During this time, we hope to provide researchers, citizens and people who are interested 
            in Air Pollution conditions, with realtime air quality data. This is also to help increse people's awareness of the importance of air quality and to start avoiding things that will produce more pollutants.
            As sensors are mostly located in Yangon and Mandalay, we quite have a hard time collecting data from other regions (we are working on expanding the scope of our data).
            Also, as recent pandemic hit hard on all the countries in the world, we make analysis on impacts that it has on air quality of Yangon and Mandalay.
          </p>
        </div>


        <div className="row">
          <div className="col-md-6">
            <div className="Mandalay">
              <h5 className="graph-heading">
                Mandalay AQI Historical Chart (2019 December to 2020)
              </h5>

              <Chart
                padding={[10, 10, 50, 50]}
                height={300}
                autoFit
                data={aqyByMonthMandalay}
              >
                <LineAdvance
                  shape="smooth"
                  point
                  area
                  position="date*AQI"
                  color={[
                    "AQI",
                    (AQI) => {
                      if (AQI > 0 && AQI < 50) {
                        return "#008000";
                      } else if (AQI >= 50 && AQI < 100) {
                        return "#1C8D00";
                      } else if (AQI >= 100 && AQI < 150) {
                        return "#3D9900";
                      } else if (AQI >= 150 && AQI < 200) {
                        return "#64A600";
                      } else if (AQI >= 200 && AQI < 250) {
                        return "#8FB300";
                      } else {
                        return "red";
                      }
                    },
                  ]}
                />

                <Axis
                  name="AQI"
                  title={{
                    autoRotate: true,
                    offset: 40,
                    textStyle: {
                      fontSize: "12",
                      textAlign: "center",
                      fill: "#999",
                      //  fontWeight: 'bold',
                    },
                    position: "center",
                  }}
                />

                <Axis name="date" label="DATE" />
              </Chart>
            </div>
          </div>

          <div className="col-md-6">
            <div className="right-graph-description">
              <h1>AirPollution in Mandalay</h1>
              <p>
                This is the air quality visualization of Mandalay. It shows the
                AQI historical data from 2019 December to 2020. As Mandalay is one of the populated city and bikes are known to be main transportaion for people, air quality can be higher than other regions. We can see that
                AQI rose up to 160 sometimes. But recently, air quality become
                good because people are staying at home during Covid.
              </p>
            </div>
          </div>
          
        </div>
        <div className="covid row">
            <div className="col-md-6">
            <h5 className="graph-heading">
                Mandalay AQI vs Daily Covid Cases(2019 December to 2020)
              </h5>
                <CovidGraph aqyByMonth={aqyByMonthMandalay} />
            </div>
            <div className="col-md-6"><div className="left-graph-description">
              <h1>Covid vs AQI in Mandalay</h1>
              <p>

              Mandalay is known to have less covid cases than Yangon and daily positive cases has less impact on its AQI than Yangon. However, we can still see that around zero covid cases, Mandalay has highest AQI and 
              gradually dropping as the cases increase. However, AQI value increases again around 1400 covid cases. 
                
                
              </p>
            </div></div>
        </div>
        <div className="row image">
            <img src="/mdy.png"></img>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="left-graph-description">
              <h1>AirPollution in Yangon</h1>
              <p>This is the air quality visualization of Yangon. As Yangon has
                most of the industries in Myanmar, air quality is usually higher than most regions.
                Maximum aqy has been 153.72.
               
               
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="Yangon">
              <h5 className="graph-heading">
                Yangon AQI Historical Chart (2019 December to 2020)
              </h5>

              <Chart
                padding={[10, 10, 50, 50]}
                height={300}
                autoFit
                data={aqyByMonthYangon}
              >
                <LineAdvance
                  shape="smooth"
                  point
                  area
                  position="date*AQI"
                  color={[
                    "AQI",
                    (AQI) => {
                      if (AQI > 0 && AQI < 50) {
                        return "#008000";
                      } else if (AQI >= 50 && AQI < 100) {
                        return "#1C8D00";
                      } else if (AQI >= 100 && AQI < 150) {
                        return "#3D9900";
                      } else if (AQI >= 150 && AQI < 200) {
                        return "#64A600";
                      } else if (AQI >= 200 && AQI < 250) {
                        return "#8FB300";
                      } else {
                        return "red";
                      }
                    },
                  ]}
                />

                <Axis
                  name="AQI"
                  title={{
                    autoRotate: true,
                    offset: 40,
                    textStyle: {
                      fontSize: "12",
                      textAlign: "center",
                      fill: "#999",
                      //  fontWeight: 'bold',
                    },
                    position: "center",
                  }}
                />

                <Axis name="date" label="DATE" />
              </Chart>
            </div>
          </div>
          <div className="col-md-12">
            {/* <img
              src="/mdy.png"
              style={{ width: "80%", height: "80%", margin: "10%" }}
            ></img> */}
          </div>
        </div>
        
        <div className="covid row">
            
            <div className="col-md-6"><div className="left-graph-description">
              <h1>Covid vs AQI in Yangon</h1>
              <p>
                  Yangon is the city with the most covid cases in Myanmar. Due to the help of visualization, we can see that covid cases has huge impact 
                  on Yangon's AQI. When covid cases are close to zero, the AQI is pretty high. As the cases increase, we can see that AQI value is gradually dropping showing
                  less vehicle usage greatly reduce the AQI.
               
              </p>
            </div></div>
            <div className="col-md-6" style={{margin:"auto"}}>
            <h5 className="graph-heading">
                Yangon AQI vs Daily Covid Cases(2019 December to 2020)
              </h5>
                <CovidGraph aqyByMonth={aqyByMonthYangon} />
            </div>
        </div>

        <div className="row image">
            <img src="/ygn.png"></img>
        </div>




      </div>
    </div>
  );
};

export default GraphsGallery;
