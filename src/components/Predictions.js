import './styles/prediction.scss'

import React, { useEffect, useState } from 'react';

import axios from 'axios'

import Cal from '../components/InnerComponents/Calender/Cal'

import { Chart, LineAdvance,Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape, Facet ,Coordinate,Interval} from 'bizcharts'


const Predictions = ()=>{

    const [predict,setPredict]= useState([])

    useEffect(function(){
        axios({
            url:"https://myanmarairpollution.herokuapp.com/api/v1/predict",
            method:"GET"
        }).then((result)=>{

            console.log("Showing predict data")

            console.log(result.data);

            setPredict(result.data);
        }).catch(err=>console.log(err))
    },[])

    
    return <div className="predict">
        <div className="container">
        <div className="predict-header">
        <h2>
            AQI Prediction
        </h2>
        <p>Air pollution prediction is crucial because if we know there is tommorrow's air quality,  we can avoid predictable dangers. So, Air pollution prediction can save a lot of people's health</p>
        </div>
        
        <div className="content row">

            <div className="col-md-6"><Cal /></div>
            <div className="col-md-6 predict-des">
                <h5>Machine Learning Model</h5>
                <p>Air prediction model is created using XGBoost Regressor because it resulted the best performances and the least error compared to other prediction models.

                </p>

<h6>Tommorow's AQI data:</h6>
{predict.map(place=>(<div>{place.Label}:{place.AQI} AQI</div>))}


            </div>
            
        </div>
        
        
        
        </div>
        
        
        </div>
}

export default Predictions;