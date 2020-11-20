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

const CovidGraph = (props)=>{

    return <div><Chart
    padding={[10, 10, 50, 50]}
    height={300}
    autoFit
    data={props.aqyByMonth}
  >
    <LineAdvance
    tooltip="AQI*covid*date"
      shape="smooth"
      point
      area
      position="covid*AQI"
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

    {/* <Axis
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
    /> */}

    <Axis name="date" label="DATE" />
  </Chart></div>

}

export default CovidGraph;