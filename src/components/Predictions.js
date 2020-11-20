import './styles/prediction.scss'

import React, { useEffect, useState } from 'react';

import axios from 'axios'

import Cal from '../components/InnerComponents/Calender/Cal'


const Predictions = ()=>{

    const [predict,setPredict]= useState([])

    useEffect(function(){
        axios({
            url:"https://myanmarairpollution.herokuapp.com/api/v1/predict",
            method:"GET"
        }).then((result)=>{
            console.log(result.data)
            setPredict(result.data)
        }).catch(err=>console.log(err))
    },[])

    
    return <div className="predict">
        <div className="container">
        <div className="predict-header">
        <h2>
            This is the prediction page
        </h2>
        <p>This is our prediciton page. We predict the tommorow possible AQI value by putting in some shit.This is our prediciton page. We predict the tommorow possible AQI value by putting in some shit.This is our prediciton page. We predict the tommorow possible AQI value by putting in some shit</p>

        </div>
        
        <div className="content row">

            <div className="col-md-6"><Cal /></div>
            <div className="col-md-6 predict-des">
                <h5>Machine Learning Model</h5>
                <p>We use our stupid machine learning model to predict some shit</p>
<h6>Tommorow's AQI data for some places in Yangon:</h6>

            </div>
            
        </div>
        
        
        
        </div>
        
        
        </div>
}

export default Predictions;