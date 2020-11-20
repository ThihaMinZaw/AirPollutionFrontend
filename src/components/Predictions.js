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
        <p>What a time to be alive!. As human's knowledge on machine learning and data analytics areas has been hugely expanding, we use these tools to build a data model which can predict tommorow's AQI. Unfortunately, our model can only predict only for two regions, Yangon and Mandalay. We promise we'll work on new regions too. Thank you.</p>
        </div>
        
        <div className="content row">

            <div className="col-md-6"><Cal /></div>
            <div className="col-md-6 predict-des">
                <h5>Machine Learning Model</h5>
                <p>This model is created using XGBoost Regressor which has the highest performances for current dataset compare to the others.

                </p>

<h6>Tommorow's AQI data:</h6>
{predict.map(place=>(<div>{place.Label}:{place.AQI} AQI</div>))}


            </div>
            
        </div>
        
        
        
        </div>
        
        
        </div>
}

export default Predictions;