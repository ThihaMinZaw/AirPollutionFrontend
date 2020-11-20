import './location_graph.scss'
import {Chart, Axis, Tooltip, Line, Point,LineAdvance} from "bizcharts";



const LocationGraph = (props)=>

{    
    
    const data = [
	{
		month: "Jan",
		city: "Tokyo",
		temperature: 7
	},
	{
		month: "Jan",
		city: "London",
		temperature: 3.9
	},

];
    
    return (<div className="LocationGraph">
        
        <h4 className="graph-heading">Historical AQI data from 2019 to 2020</h4>

        <Chart padding={[10, 20, 50, 40]} autoFit data={data} >
		<LineAdvance
			shape="smooth"
			point
			area
			position="month*temperature"
			color="city"
		/>
	</Chart>
    </div>)

}


export default LocationGraph;