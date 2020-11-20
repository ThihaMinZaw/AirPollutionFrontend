import './GraphGallery.scss'

import {useEffect,useState} from 'react'

import {Chart, Axis, Tooltip, Line, Point,LineAdvance,Legend,View,Geom} from "bizcharts";
import axios from 'axios';

const GraphsGallery = (props)=>{

    
    
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
    const [aqyHistory,setAqyHistory] = useState({});
    const [aqyByMonthMandalay,setAqyByMonthMandalay] = useState([]);
    const [aqyByMonthYangon,setAqyByMonthYangon] = useState([]);

    useEffect(function(){
        axios({
            method:"GET",
            url:"https://myanmarairpollution.herokuapp.com/api/v1/aqi_monthly"
          }).then(result=>{
             
                console.log(result.data)
              //reformatting data into aqy by month
              const [yangonData,mandalayData] =reformatByMonth(result.data);

              setAqyByMonthMandalay(mandalayData);
              setAqyByMonthYangon(yangonData)

              


              

            
            
            }).catch(err=>console.log(err))
    },[]);

    function reformatByMonth(data_json){

        let temp_mandalay = []
        let temp_yangon=[]
        

        for (let month in data_json['Mandalay']) {
           
           
             for(let date in data_json['Mandalay'][month]){
                
                let AQI = data_json['Mandalay'][month][date].AQI;
                let covid = data_json['Mandalay'][month][date].NEW;
                temp_mandalay.push({AQI:AQI,date:date,city:"Mandalay",covid:covid});

            }
          }

          for (let month in data_json['Yangon']) {
           
           
            for(let date in data_json['Yangon'][month]){
               
               let AQI = data_json['Yangon'][month][date].AQI;
               let covid = data_json['Yangon'][month][date].NEW;
               temp_yangon.push({AQI:AQI,date:date,city:"Yangon",covid:covid});

           }
         }

        

        return [temp_yangon,temp_mandalay];
        

    }






    return <div className="GraphGallery">
        
        
        <div className="container">
        <div className="welcome-text">
        <h1>Welcome to our Myanmar AirPollution Analysis Website</h1>
        <p>Welcome to our Myanmar AirPollution Analysis Website
This is our Air pollution analysis which was initalized to increase the awareness of Myanmar people in air quality. We provide the visualization of air quality for specific places in Myanmar. Moreover, these data can be applied in different places for different purposes so We hope that it will help the Myanamr society in learning or developments related to air quality. We also predict the tomorrow's air quality to avoid from going outside at the dangerous times.</p>
        </div>
    <div className="row">
        <div className="col-md-12"><img src="/ygn.png" ></img></div>
        <div className="col-md-12"><img src="/mdy.png" ></img></div>
    </div>

        <div className="row">
            <div className="col-md-6">
            <div className="Mandalay">
        <h5 className="graph-heading">Mandalay AQI Historical Chart (2019 December to 2020)</h5>
        
        <Chart padding={[10, 10, 50, 50]} height={300} autoFit data={aqyByMonthMandalay} >

        
        
		<LineAdvance
			shape="smooth"
			point
			area
            position="date*AQI"
            color={['AQI', (AQI) => {

               if(AQI>0 && AQI<50)
               {
                   return "#008000"
               }
               else if(AQI>=50 && AQI<100)
               {
                   return "#1C8D00"
               }
               else if(AQI>=100 && AQI<150)
               {
                   return "#3D9900"
               }
               else if(AQI>=150 && AQI<200)
               {
                   return "#64A600"
               }
               else if(AQI>=200 && AQI<250)
               {
                   return "#8FB300"
               }
               else{
                   return "red"
               }           
            
            }
                
                ]}     
        
        />

        <Axis name="AQI" title={{
		 autoRotate: true, 
		 offset: 40, 
		 textStyle: {
			 fontSize: '12',
			 textAlign: 'center',
			 fill: '#999',
			//  fontWeight: 'bold',
		 },
		 position: 'center', 
	 }} />
       
       <Axis name="date" label="DATE" />
      
	    
       
	</Chart>
    <Chart padding={[10, 10, 50, 50]} height={300} autoFit data={aqyByMonthMandalay} >

        
        
		<LineAdvance
        tooltip="covid*AQI*date"
			shape="smooth"
			point
			area
            position="AQI*covid"
            color={['AQI', (AQI) => {

               if(AQI>0 && AQI<50)
               {
                   return "#008000"
               }
               else if(AQI>=50 && AQI<100)
               {
                   return "#1C8D00"
               }
               else if(AQI>=100 && AQI<150)
               {
                   return "#3D9900"
               }
               else if(AQI>=150 && AQI<200)
               {
                   return "#64A600"
               }
               else if(AQI>=200 && AQI<250)
               {
                   return "#8FB300"
               }
               else{
                   return "red"
               }           
            
            }
                
                ]}     
        
        />

        {/* <Axis name="AQI" title={{
		 autoRotate: true, 
		 offset: 40, 
		 textStyle: {
			 fontSize: '12',
			 textAlign: 'center',
			 fill: '#999',
			//  fontWeight: 'bold',
		 },
		 position: 'center', 
	 }} />
       
       <Axis name="date" label="DATE" /> */}
      
	    
       
	</Chart>
    
    
    </div>
    
            </div>
            
            <div className="col-md-6">
                <div className="right-graph-description">
        <h1>AirPollution in Mandalay</h1>
        <p>This is the air quality visualization of Mandalay.. It shows the AQI historical data.  As Mandalay is one of the populated city in Myanmar, air quality is the worst all the time. We can see that AQI rose up to 160 sometimes.  But recently, air quality become good because people are staying at home during Covid.</p>
    </div>
            </div>
        </div>


        <div className="row">
            
           
            <div className="col-md-6">
                <div className="left-graph-description">
        <h1>AirPollution in Yangon</h1>
        <p> This is the air quality visualization of Yangon.. As Yangon has most of the industries in Myanmar, air quality can rise pretty high. Maximum aqy has been 153.72.</p>
    </div>
            </div>
            <div className="col-md-6">
            <div className="Yangon">
        <h5 className="graph-heading">Yangon AQI Historical Chart (2019 December to 2020)</h5>
        
        <Chart padding={[10, 10, 50, 50]} height={300} autoFit data={aqyByMonthYangon} >

        
        
		<LineAdvance
			shape="smooth"
			point
			area
			position="date*AQI"
            color={['AQI', (AQI) => {

               if(AQI>0 && AQI<50)
               {
                   return "#008000"
               }
               else if(AQI>=50 && AQI<100)
               {
                   return "#1C8D00"
               }
               else if(AQI>=100 && AQI<150)
               {
                   return "#3D9900"
               }
               else if(AQI>=150 && AQI<200)
               {
                   return "#64A600"
               }
               else if(AQI>=200 && AQI<250)
               {
                   return "#8FB300"
               }
               else{
                   return "red"
               }           
            
            }
                
                ]}     
        
        />

        <Axis name="AQI" title={{
		 autoRotate: true, 
		 offset: 40, 
		 textStyle: {
			 fontSize: '12',
			 textAlign: 'center',
			 fill: '#999',
			//  fontWeight: 'bold',
		 },
		 position: 'center', 
	 }} />
       
       <Axis name="date" label="DATE" />
      
	    
       
	</Chart>
    <Chart padding={[10, 10, 50, 50]} height={300} autoFit data={aqyByMonthYangon} >

        
        
		<LineAdvance
        tooltip="covid*AQI*date"
			shape="smooth"
			point
			area
            position="AQI*covid"
            color={['AQI', (AQI) => {

               if(AQI>0 && AQI<50)
               {
                   return "#008000"
               }
               else if(AQI>=50 && AQI<100)
               {
                   return "#1C8D00"
               }
               else if(AQI>=100 && AQI<150)
               {
                   return "#3D9900"
               }
               else if(AQI>=150 && AQI<200)
               {
                   return "#64A600"
               }
               else if(AQI>=200 && AQI<250)
               {
                   return "#8FB300"
               }
               else{
                   return "red"
               }           
            
            }
                
                ]}     
        
        />
        

        {/* <Axis name="AQI" title={{
		 autoRotate: true, 
		 offset: 40, 
		 textStyle: {
			 fontSize: '12',
			 textAlign: 'center',
			 fill: '#999',
			//  fontWeight: 'bold',
		 },
		 position: 'center', 
	 }} /> */}
       
       {/* <Axis name="date" label="DATE" /> */}
      
	    
       
	</Chart>
    
    </div>
            </div>
        </div>




        </div>





        


        
    

    </div>

}

export default GraphsGallery;